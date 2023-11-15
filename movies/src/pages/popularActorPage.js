import React, {useState, useEffect} from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getPopularPeople } from "../api/tmdb-api";
import TopRatedMovieList from "../components/topRatedList";
import ActorList from "../components/actorList";
// import { useEffect, useState } from 'react';
import Pagination2 from "../components/pagination";

const PopularActorPage = () => {
  const [actors, setActors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    fetchPopularActors(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const fetchPopularActors = async (page, pageSize) => {
    const data = await getPopularPeople(page, pageSize);
    setActors(data.results);
    // If your API returns additional pagination information (total pages, total results), update state accordingly
    // setTotalPages(data.total_pages);
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const handleNextPage = () => {
    // Increment current page when "Next" button is clicked
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <Pagination2
        currentPage={currentPage}
        pageSize={pageSize}
        // totalPages={totalPages}  // Uncomment if your API returns total_pages
        onPageChange={handlePageChange}
        onNextPage={handleNextPage} // Pass the new function to handle "Next" button click
      />
      <h1>Popular Actors</h1>
      <ActorList actors={actors} />
    </div>
  );
};

export default PopularActorPage;