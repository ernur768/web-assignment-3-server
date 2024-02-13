const {Schema, model} = require('mongoose')

const dataSchema = new Schema({
    quote: String,
    author: String,
})

const quotesApiRequestSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    data: {type: dataSchema, required: true},
    date: {type: Date, default: Date.now}
})


module.exports = model('QuotesApiRequest', quotesApiRequestSchema)
