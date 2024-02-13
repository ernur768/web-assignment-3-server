const userService = require('../service/user-service')

class UserController {
    async getUsers(req, res, next) {
        try {
            const {offset, limit} = req.query
            const users = await userService.getUsers(offset, limit)

            res.status(200).json(users)
        }
        catch (error) {
            next(error)
        }
    }

    async updateUser(req, res, next) {
        try {
            const { id } = req.params
            const userData = req.body
            const user = await userService.updateUser(id, userData)
            res.status(200).json(user)
        }
        catch (error) {
            next(error)
        }
    }

    async deleteUser(req, res, next) {
        try {
            const { id } = req.params
            const user = await userService.deleteUser(id)
            res.status(200).json(user)
        }
        catch (error) {
            next(error)
        }
    }

    async reviveUser(req, res, next) {
        try {
            const { id } = req.params
            const user = await userService.reviveUser(id)

            res.status(200).json(user)
        }
        catch (error) {
            next(error)
        }
    }
}

module.exports = new UserController();