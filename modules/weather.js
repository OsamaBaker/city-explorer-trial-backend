'use strict';

const axios = require('axios');
require('dotenv').config();
const cors = require('cors')

function handleWeather (req, res) {
    let weather;

    let searchQuery = req.query.searchQuery;

    //https://api.weatherbit.io/v2.0/forecast/daily?city=Amman&key=44b02ec8b88e4eb4baf60370430d0bf8

    let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchQuery}&key=${process.env.WEATHERBIT_API_KEY}`

    let weatherData = axios.get(url).then(response => {
        weather = response.data.data
        let weatherArr = weather.map((item, idx) => {
            return new Weather(item)
        });
        res.json(weatherArr)
    })
    .catch(error => {
        res.send(error)
    })
}



class Weather {
    constructor(allData){
        this.valid_date = allData.valid_date,
        this.description = allData.weather.description
    }
}







module.exports = handleWeather;