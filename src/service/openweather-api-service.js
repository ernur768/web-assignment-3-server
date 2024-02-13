const ApiError = require('../exception/api-error');
const OpenweatherApiRequestModel = require('../model/openweather-api-request-model')

class OpenweatherApiService {
    async getData(userId, city) {
        if (!city) {
            throw ApiError.BadRequest('Please provide a city');
        }

        const apiBase = 'https://api.openweathermap.org/data/2.5/weather?'
        const apiKey = '98328c06fafdb1211c0a019b833e62cb'
        const units = 'metric'

        const res = await fetch(apiBase + `appid=${apiKey}` + `&q=${city}` + `&units=${units}`)

        if (!res.ok) {
            throw ApiError.ServerError()
        }

        const data = this._normalizeWeatherData(await res.json())

        await OpenweatherApiRequestModel.create({
            userId,
            city,
            data,
        })

        return data
    }

    async getHistory(userId) {
        return OpenweatherApiRequestModel.find({userId}).sort({date: -1})
    }

    _normalizeWeatherData(data) {
        return {
            temp: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            coord: data.coord,
            feels_like: data.main.feels_like,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            wind_speed: data.wind.speed,
            country_code: data.sys.country,
        }
    }
}

module.exports = new OpenweatherApiService()