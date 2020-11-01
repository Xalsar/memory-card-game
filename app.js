const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const userRouter = require('./routers/user')
const scoreRouter = require('./routers/score')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(scoreRouter)

module.exports = app