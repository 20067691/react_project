import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { getTopRatedMovie } from "../api/tmdb-api";
import TopRatedMovieCard from "../components/topRatedMovieCard";

const HomePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)
  const {  data: topMovie, error: topMovieError, isLoading: topMovieLoading, isError: topMovieIsError }  = useQuery('topRated', getTopRatedMovie)

  if (isLoading || topMovieLoading) {
    return <Spinner />
  }

  if (isError || topMovieIsError) {
    return <h1>{error.message || topMovieError.message}</h1>
  }  
  const movies = data.results;
  const topRatedMovie = topMovie.results[0];
  console.log(topRatedMovie);

  

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <>
    <TopRatedMovieCard topRatedMovie={topRatedMovie}
      
    />
    

    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
    </>
);
};
export default HomePage;