const mongoose = require('mongoose')

/*

Create score schema and model:
Note that I include the player name in the score.

Why? Because making a LEFT MARGIN is very resource expensive in Mongo. So I priorize efficiency over memory.

*/

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