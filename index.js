const app = require('./app')
const port = process.env.PORT
const express = require('express')
const path = require('path')

app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})