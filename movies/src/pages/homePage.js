import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { getTopRatedMovie } from "../api/tmdb-api";
import { getPopularPeople } from "../api/tmdb-api";
import TopRatedMovieList from "../components/topRatedList";
import ActorList from "../components/actorList";
const HomePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)
  const {  data: topMovie, error: topMovieError, isLoading: topMovieLoading, isError: topMovieIsError }  = useQuery('topRated', getTopRatedMovie)
  const {  data: people, error: peopeleError, isLoading: peopleLoading, isError: peopleError }  = useQuery('popular-people', getPopularPeople)
  

  if (isLoading || topMovieLoading || peopleLoading) {
    return <Spinner />
  }

  if (isError || topMovieIsError || peopleError) {
    return <h1>{error.message || topMovieError.message}</h1>
  }  
  const movies = data.results;
  const topRatedMovies = topMovie?.results?.slice(0, 3) || [];
  const popularPeople = people.results;
  console.log(topRatedMovies);
  console.log(popularPeople);

  

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites)) 

  return (
    <>
    <ActorList actors={popularPeople} />
    
    <TopRatedMovieList movies={topRatedMovies} />
      
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