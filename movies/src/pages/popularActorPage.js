import React from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getPopularPeople } from "../api/tmdb-api";
import TopRatedMovieList from "../components/topRatedList";
import ActorList from "../components/actorList";

const ActorPage = () => {


  const {  data: people, error: peopeleError, isLoading: peopleLoading, isError: peopleError }  = useQuery('popular-people', getPopularPeople)
  

  if (peopleLoading) {
    return <Spinner />
  }

  if (peopleError) {
    return <h1>{peopleError.message}</h1>
  }  

  const popularPeople = people.results;

  console.log(popularPeople);



  return (
    <>
    <ActorList actors={popularPeople} />
    
    </>
);
};
export default ActorPage;