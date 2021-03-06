'use strict';

const express = require('express');
const server = express();
const PORT = 3001
require('dotenv').config();
const cors = require('cors')

server.use(cors())

const locationIq = require('./modules/locationIq')
const weather = require('./modules/weather')
const getMovies = require('./modules/getMovies')


// home server
server.get('/', home)

// location iq server get
server.get('/location', locationIq)

// weatherbit server get
server.get('/weather', weather)

// movie server get
server.get('/movies', getMovies)

// location Iq function
function home (req, res) {
    res.send('Working')
}






// server listen
server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})