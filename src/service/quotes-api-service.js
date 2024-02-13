const ApiError = require('../exception/api-error');
const QuotesApiRequestModel = require('../model/quotes-api-request-model')

class QuotesApiService {
    async getQuote(userId) {
        const fetchOptions = {
            method: 'GET',
            headers: {
                'X-Api-Key': 'dAB+R52neK6shm4WdwriJg==rry9YwuzLnXSKg9C'
            }
        }

        const res = await fetch('https://api.api-ninjas.com/v1/quotes', fetchOptions)

        if (!res.ok) {
            throw ApiError.ServerError()
        }

        const data = this._normalizeQuoteData((await res.json())[0])

        await QuotesApiRequestModel.create({
            userId,
            data
        })

        return data
    }

    async getHistory(userId) {
        return QuotesApiRequestModel.find({userId}).sort({date: -1})
    }

    _normalizeQuoteData(data) {
        return {
            quote: data.quote,
            author: data.author,
        }
    }
}

module.exports = new QuotesApiService()