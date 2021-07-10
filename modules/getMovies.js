'use strict'

const axios = require('axios')
require('dotenv').config();

function getMovies (req,res){

    let movies;

    let searchQuery = req.query.searchQuery;

    // MOVIEDB_API_KEY

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`

    let movieData = axios.get(url).then(response => {
        movies = response.data.results
        let movieArr = movies.map((item, idx) => {
            return new Movie(item)
        })
        res.json(movieArr)
    })
    .catch(error => {
        res.send(error)
    })
}



class Movie {
    constructor(allData){
    this.title = allData.title
    this.vote_average = allData.vote_average
    this.poster_path = `http://image.tmdb.org/t/p/w342` + allData.poster_path
}
}



module.exports = getMovies;