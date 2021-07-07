'use strict';

const axios = require('axios');
require('dotenv').config();

function handleLocation (req, res) {

    let location;

    let searchQuery = req.query.searchQuery;

    //https://eu1.locationiq.com/v1/search.php?key=pk.203a485f91eac287a66fa038e34fa0b8&q=Amman&format=json

    // http://localhost:3001/location?key=pk.203a485f91eac287a66fa038e34fa0b8&q=Amman&format=json

    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.LOCATION_IQ_API_KEY}&q=${searchQuery}&format=json`

    axios.get(url).then(locationData => {
        location = locationData.data
        let locationArr = location.map((item, idx) => {
            return new Location(item)
        })
        res.json(locationArr[0])
    })
    .catch(error => {
        res.status(500).send(error)
    })
}


class Location {
    constructor(allLocationData){
        this.display_name = allLocationData.display_name,
        this.lat = allLocationData.lat,
        this.lon = allLocationData.lon
    }
}









module.exports = handleLocation