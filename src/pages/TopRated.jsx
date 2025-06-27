import { useEffect, useContext } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import MoviesContext from "../components/context/MovieContext";
import ENDPOINTS from "../utils/constants/endpoint";

function TopRatedMovie() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(function () {
    async function fetchTopRatedMovies() {
      const response = await axios(ENDPOINTS.TOP_RATED);
      setMovies(response.data.results);
    }

    fetchTopRatedMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies title="Top Rated Movies" />
    </>
  );
}

export default TopRatedMovie;
