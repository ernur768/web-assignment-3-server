const jwt = require('jsonwebtoken');
const TokenModel = require('../model/token-model');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(
            payload,
            process.env.JWT_ACCESS_SECRET,
            {expiresIn: process.env.JWT_ACCESS_EXPIRES_IN}
        );
        const refreshToken = jwt.sign(
            payload,
            process.env.JWT_REFRESH_SECRET,
            {expiresIn: process.env.JWT_REFRESH_EXPIRES_IN}
        )

        return {
            accessToken,
            refreshToken,
        }
    }

    async saveToken(userId, refreshToken) {
        const token = await TokenModel.findOne({user: userId})
        if (token) {
            token.refreshToken = refreshToken
            return token.save();
        }
        return await TokenModel.create({user: userId, refreshToken})
    }

    async removeToken(refreshToken) {
        return TokenModel.deleteOne({refreshToken})
    }

    async verifyRefreshToken(refreshToken) {
        try {
            return jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        }
        catch (error) {
            return null
        }
    }

    async verifyAccessToken(accessToken) {
        try {
            return jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET)
        }
        catch (error) {
            return null
        }
    }

    async findToken(refreshToken) {
        return TokenModel.findOne({ refreshToken })
    }
}

module.exports = new TokenService();