const {Schema, model} = require('mongoose')

const userSchema = new Schema(
    {
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        username: {type: String, required: true},
        role: {type: String, default: "user"},
        deletedAt: {type: Date, default: null}
    },
    {
        timestamps: true,
    }
)

module.exports = model('user', userSchema)