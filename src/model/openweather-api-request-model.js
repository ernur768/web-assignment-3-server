const {Schema, model} = require('mongoose')

const coordSchema = new Schema({
    lon: Number,
    lat: Number,
})

const dataSchema = new Schema({
    temp: Number,
    description: String,
    icon: String,
    coord: coordSchema,
    feels_like: Number,
    humidity: Number,
    pressure: Number,
    wind_speed: Number,
    country_code: String,
})

const openweatherApiRequestSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    data: {type: dataSchema, required: true},
    city: {type: String, required: true},
    date: {type: Date, default: Date.now},
})

module.exports = model('OpenweatherApiRequest', openweatherApiRequestSchema)