import { useEffect, useContext } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import MoviesContext from "../components/context/MovieContext";
import ENDPOINTS from "../utils/constants/endpoint";

function NowPlayingMovie() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(function () {
    async function fetchNowPlayingMovies() {
      const response = await axios(ENDPOINTS.NOW_PLAYING);
      setMovies(response.data.results);
    }

    fetchNowPlayingMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies title="Now Playing Movies" />
    </>
  );
}

export default NowPlayingMovie;
