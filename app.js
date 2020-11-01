const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const userRouter = require('./routers/user')
const scoreRouter = require('./routers/score')

const app = express()

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(scoreRouter)

module.exports = app