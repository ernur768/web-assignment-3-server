const {Schema, model} = require('mongoose');

const dataSchema = new Schema({
    joke: String
})

const chuckNorrisApiRequestSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    data: {type: dataSchema, required: true},
    date: {type: Date, default: Date.now}
})

module.exports = model('ChuckNorrisApiRequest', chuckNorrisApiRequestSchema)