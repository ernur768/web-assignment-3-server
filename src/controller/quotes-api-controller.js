const QuoteService = require("../service/quotes-api-service");

class QuotesApiController {
    async getQuote(req, res, next) {
        try {
            const userId = req.user.id
            const quote = await QuoteService.getQuote(userId)

            res.status(200).json(quote)
        }
        catch (error) {
            next(error)
        }
    }

    async getHistory(req, res, next) {
        try {
            const userId = req.user.id
            const quotes = await QuoteService.getHistory(userId)
            res.status(200).json(quotes)
        }
        catch (error) {
            next(error)
        }
    }
}

module.exports = new QuotesApiController();