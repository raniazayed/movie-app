import React from 'react'
import  Movie  from './Movie';
import AddFavourite from "./AddFavourite";
const MoviesList=({movies, onAddToFavourite, isFavourite}) =>{
    // console.log(movies);
  return (
    <>{movies?.map((movie)=> <div className='col-2 image-container justify-content-start m-3'>
      <Movie key={movie?.imdbID} movie={movie}/>
      <div 
      onClick={()=> {
        onAddToFavourite(movie);
        }}
      className='overlay d-flex align-items-center'>
        <AddFavourite isFavourite={isFavourite}/>
      </div>
      </div> )}</>
  )
}

export default MoviesList;