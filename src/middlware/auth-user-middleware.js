const ApiError = require('../exception/api-error');
const tokenService = require('../service/token-service')

const AuthUserMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return next(ApiError.UnauthorizedError())
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return next(ApiError.UnauthorizedError())
        }

        const user = await tokenService.verifyAccessToken(token)
        if (!user) {
            return next(ApiError.UnauthorizedError())
        }

        req.user = user

        next()
    }
    catch (error) {
        next(ApiError.UnauthorizedError());
    }
}

module.exports = AuthUserMiddleware;