const ApiError = require('../exception/api-error');
const ChuckNorrisRequestModel = require('../model/chuck-norris-api-request-model');

class ChuckNorrisApiService {
    async getJoke(userId) {
        const url = 'https://api.chucknorris.io/jokes/random'
        const res = await fetch(url)

        if (!res.ok) {
            throw ApiError.ServerError()
        }

        const { value } = await res.json()

        await ChuckNorrisRequestModel.create({
            userId,
            data: {joke: value}
        })

        return {joke: value}
    }

    async getHistory(userId) {
        return ChuckNorrisRequestModel.find({userId}).sort({date: -1})
    }
}

module.exports = new ChuckNorrisApiService()