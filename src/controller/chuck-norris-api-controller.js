const chuckNorrisApiService  = require('../service/chuck-norris-api-service')

class ChuckNorrisApiController {

    async getJoke(req, res, next) {
        try {
            const userId = req.user.id
            const joke = await chuckNorrisApiService.getJoke(userId)

            res.status(200).json(joke)
        }
        catch (error) {
            next(error)
        }
    }

    async getHistory(req, res, next) {
        try {
            const userId = req.user.id
            const history = await chuckNorrisApiService.getHistory(userId)
            res.status(200).json(history)
        }
        catch (error) {
            next(error)
        }
    }
}

module.exports = new ChuckNorrisApiController()