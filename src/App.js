import { useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './components/Header';
import SearchBox  from "./components/SearchBox";

const App=() =>{
  const [movies, setMovies]=useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [isFavourite, setIsFavourite]=useState(false);

  const getMovieList = async() => {
    // 'http://www.omdbapi.com/?i=tt3896198&apikey=64659d3a'
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=64659d3a`;
    const response = await fetch(url);
    const resJson = await response.json();
    setMovies(resJson.Search);
  }
  useEffect(()=>{
    getMovieList();
  },[]);

  const handleOnChange =(searchValue)=>{
    console.log(searchValue)
    setSearchValue(searchValue);
    getMovieList();
  };

  const onAddToFavourite = (movie)=>{
    console.log(movie, isFavourite);
    setIsFavourite(!isFavourite);
    movie.isFavourite = isFavourite;
    console.log(movie);
    if(movie.isFavourite){
      setFavouriteMovies((prevState)=> [...prevState, movie])
    } else {
      setFavouriteMovies((prevState)=> {
        const favMovies = prevState.filter(mov=> mov.imdbID !== movie.imdbID);
        return favMovies;
      })

    }
  }
  return (
    <div className="container-fluid movie-app">
      <div className='row align-items-center pt-4'>
        <div className='col-6 '>
        <Header heading={'Movies'}/>
        </div>
        <div className='col-6'>
        <SearchBox searchValue={searchValue} handleOnChange={handleOnChange}/>
       </div>
      </div>
      <div className='row'>
      <MoviesList movies={movies} onAddToFavourite={onAddToFavourite}/>
      </div>

      {favouriteMovies.length > 0 &&    
    <>
          <Header heading={'Favourites'}/>
           <div className='row'>
          <MoviesList movies={favouriteMovies} isFavourite={isFavourite}/>
        </div>
    </>
      }
    
    </div>
  );
}

export default App;
