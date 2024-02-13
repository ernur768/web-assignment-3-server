const OpenweatherService = require("../service/openweather-api-service");

class WeatherApiController {
    async getWeatherData(req, res, next) {
        try {
            const userId = req.user.id
            const { city } = req.query
            const weatherData = await OpenweatherService.getData(userId, city)

            res.status(200).json(weatherData)
        }
        catch (error) {
            next(error)
        }
    }

    async getHistory(req, res, next) {
        try {
            const userId = req.user.id
            const requests = await OpenweatherService.getHistory(userId)
            res.status(200).json(requests)
        }
        catch (error) {
            next(error)
        }
    }
}

module.exports = new WeatherApiController();