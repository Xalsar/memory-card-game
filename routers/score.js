const express = require('express')
const User = require('../models/user')
const Score = require('../models/score')
const router = new express.Router()

router.post('/score/register-and-list', async (req, res) => {
    try {
        let player = await User.findOne({ name: req.body.player }, '_id name')
        if (!player) {
            player = new User({
                name: req.body.player
            })

            await player.save()
        }

        const score = new Score({
            score: req.body.score,
            player: {
                _id: player._id,
                name: player.name
            }
        })
        await score.save()

        const playerScores = await Score.find({ "player._id": player._id }, '_id player score')
        const topScores = await Score.find({}, '_id player score').sort({ score: "asc" })

        res.status(200).send({
            top: topScores,
            player: playerScores
        })
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

module.exports = router