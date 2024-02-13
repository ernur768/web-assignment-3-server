const UserModel = require("../model/user-model");
const ApiError = require("../exception/api-error");
const bcrypt = require("bcrypt");
const UserDto = require("../dto/user-dto");
const tokenService = require("./token-service");

class AuthService {
    async register(email, password, username) {
        const user = await UserModel.findOne({ email })
        if (user) {
            throw ApiError.Conflict('Email already taken');
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await UserModel.create({ email, password: hashedPassword, username });
        const userDto = new UserDto(newUser)

        return { user: userDto };
    }

    async login(email, password) {
        const user = await UserModel.findOne({ email })
        if (!user) {
            throw ApiError.BadRequest('User not found');
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            throw ApiError.BadRequest('Invalid password');
        }

        if (user.deletedAt !== null) {
            throw ApiError.UserDeletedError()
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto})

        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return { ...tokens, user: userDto };
    }

    async logout(refreshToken) {
        return tokenService.removeToken(refreshToken)
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = await tokenService.verifyRefreshToken(refreshToken)
        const tokenFromDB  = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDB) {
            throw ApiError.UnauthorizedError()
        }

        const user = await UserModel.findById(userData.id)

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto})

        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return { ...tokens, user: userDto };
    }
}

module.exports = new AuthService()