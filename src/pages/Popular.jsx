import { useContext, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constants/endpoint";
import MoviesContext from "../components/context/MovieContext";

function PopularMovie() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(function () {
    async function fetchPopularMovies() {
      const response = await axios(ENDPOINTS.POPULAR);
      setMovies(response.data.results);
    }
    fetchPopularMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies title="Popular Movies" />
    </>
  );
}

export default PopularMovie;
