const authUserMiddleware = require('../middlware/auth-user-middleware');
const weatherApiController = require('../controller/weather-api-controller')
const quotesApiController = require('../controller/quotes-api-controller')
const chuckNorrisApiController = require('../controller/chuck-norris-api-controller');

const { Router } = require('express');
const router = Router();

router.get('/weather', authUserMiddleware, weatherApiController.getWeatherData);
router.get('/weather/history', authUserMiddleware, weatherApiController.getHistory);
router.get('/quote', authUserMiddleware, quotesApiController.getQuote);
router.get('/quote/history', authUserMiddleware, quotesApiController.getHistory);
router.get('/joke', authUserMiddleware, chuckNorrisApiController.getJoke)
router.get('/joke/history', authUserMiddleware, chuckNorrisApiController.getHistory)

module.exports = router;