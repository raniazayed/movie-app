import React from 'react'

const Movie=({movie})=> {
// console.log(movie, 'movie');
  return (
    <img src={movie?.Poster} alt="movie"/>
  )
}

export default Movie;