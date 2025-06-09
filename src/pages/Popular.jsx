import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function PopularMovie() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  });

  async function getPopularMovies() {
    const response = await axios(URL);
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies movies={movies} />
    </>
  );
}

export default PopularMovie;
