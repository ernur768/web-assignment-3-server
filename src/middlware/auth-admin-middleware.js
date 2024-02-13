const ApiError = require('../exception/api-error');

const authAdminMiddleware = async (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        return next()
    }

    next(ApiError.ForbiddenError())
}

module.exports = authAdminMiddleware;