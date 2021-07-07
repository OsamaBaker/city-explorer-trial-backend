'use strict';

const express = require('express');
const server = express();
const PORT = 3001
require('dotenv').config();

const locationIq = require('./modules/locationIq')


// home server
server.get('/', home)

// location iq server get
server.get('/location', locationIq)

// location Iq function
function home (req, res) {
    res.send('Working')
}






// server listen
server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})