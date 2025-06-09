import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function TopRatedMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTopRatedMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
      const response = await axios(URL);
      setMovies(response.data.results);
    }

    fetchTopRatedMovies();
  }, []);
  return (
    <>
      <Hero />
      <Movies movies={movies} />
    </>
  );
}

export default TopRatedMovie;
