const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
    score: {
        type: Date,
        required: true
    },
    player: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
}, {
    timestamps: true
})

const Score = mongoose.model('Score', scoreSchema)

module.exports = Score