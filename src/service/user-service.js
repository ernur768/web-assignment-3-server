const UserModel = require('../model/user-model');
const UserDto = require('../dto/user-dto');
const ApiError = require('../exception/api-error');

class UserService {
    async getUsers(offset=0, limit=10) {
        const users = await UserModel.find().skip(offset).limit(limit)
        return users.map(user => new UserDto(user))
    }

    async updateUser(id, {email, username, role}) {
        const user = await UserModel.findById(id)

        if (!user) {
            throw ApiError.BadRequest('User not found');
        }

        user.email = email || user.email
        user.username = username || user.username
        user.role = role || user.role

        return new UserDto(await user.save())
    }

    async deleteUser(id){
        const user = await UserModel.findById(id)
        if (!user) {
            throw ApiError.BadRequest('User not found');
        }

        user.deletedAt = Date.now()
        return new UserDto(await user.save())
    }

    async reviveUser(id) {
        const user = await UserModel.findById(id)
        if (!user) {
            throw ApiError.BadRequest('User not found');
        }

        user.deletedAt = null
        return new UserDto(await user.save())
    }
}

module.exports = new UserService();