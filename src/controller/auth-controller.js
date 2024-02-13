const authService = require("../service/auth-service");

class AuthController {
    async register(req, res, next) {
        try {
            const { email, password, username } = req.body
            const {user} = await authService.register(email, password, username)

            res.status(200).json(user)
        }
        catch (error) {
            next(error)
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body
            const user = await authService.login(email, password)
            res.cookie(
                'refreshToken',
                user.refreshToken,
                {
                    httpOnly: true,
                    maxAge: process.env.REFRESH_TOKEN_COOKIE_MAX_AGE_DAY * 24 * 60 * 60 * 1000
                }
            )

            res.status(200).json(user)
        }
        catch (error) {
            next(error)
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const token = await authService.logout(refreshToken)
            res.clearCookie('refreshToken')
            res.status(200).json(token)
        }
        catch (error) {
            next(error)
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            console.log('auth-controller, refresh func:', refreshToken)
            const user = await authService.refresh(refreshToken)
            res.cookie(
                'refreshToken',
                user.refreshToken,
                {
                    httpOnly: true,
                    maxAge: process.env.REFRESH_TOKEN_COOKIE_MAX_AGE_DAY * 24 * 60 * 60 * 1000
                }
            )

            res.status(200).json(user)
        }
        catch (error) {
            next(error)
        }
    }
}

module.exports = new AuthController();