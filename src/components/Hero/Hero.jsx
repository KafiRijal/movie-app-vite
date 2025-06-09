import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const StyleHero = styled.div`
  margin: 1rem;
  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }
  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }
  p {
    color: #64748b;
    margin-bottom: 1rem;
    text-align: justify;
  }
  a {
    padding: 0.8rem 2rem;
    display: inline-block;
    border: none;
    border-radius: 10px;
    background-color: #4361ee;
    color: #fff;
    text-decoration: none;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
    margin-left: 50px;
  }
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
    section {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  }
`;

const HeroLeft = styled.div`
  margin-bottom: 1rem;
  @media (min-width: 992px) {
    flex-basis: 50%;
  }
`;

const HeroRight = styled.div`
  @media (min-width: 992px) {
    flex-basis: 50%;
  }
`;

function Hero() {
  const [movie, setMovie] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const trendingURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
        const trendingResponse = await axios.get(trendingURL);
        const firstMovie = trendingResponse.data.results[0];

        const detailURL = `https://api.themoviedb.org/3/movie/${firstMovie.id}?api_key=${API_KEY}&append_to_response=videos`;
        const detailResponse = await axios.get(detailURL);

        setMovie(detailResponse.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }

    fetchMovieData();
  }, [API_KEY]);

  if (!movie) return <p>Loading...</p>;

  const genres = movie.genres.map((genre) => genre.name).join(", ");
  const trailerKey =
    movie.videos.results.length > 0 ? movie.videos.results[0].key : null;

  return (
    <StyleHero>
      <section>
        <HeroLeft>
          <h2>{movie.title}</h2>
          <h3>{genres}</h3>
          <p>{movie.overview}</p>
          {trailerKey && (
            <a
              href={`https://www.youtube.com/watch?v=${trailerKey}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Movie
            </a>
          )}
        </HeroLeft>
        <HeroRight>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
          />
        </HeroRight>
      </section>
    </StyleHero>
  );
}

export default Hero;
