import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledDetailMovie = styled.div`
  // Mobile Screen
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  text-align: center;

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
  }

  h2 {
    font-size: 2.44rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    font-size: 1.59rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: #64748b;
  }

  // Medium Screen: 768px
  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;

    .poster {
      flex-basis: 30%;
    }

    .info {
      flex-basis: 60%;
    }
  }

  // Large Screen
  @media screen and (min-width: 992px) {
  }
`;

function DetailMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function getDetailMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const URL = `https:/api.themoviedb.org/3/movie/${id}${params}`;
      const response = await axios(URL);

      setMovie(response.data);
    }
    getDetailMovie();
  }, [id]);

  return (
    <>
      <StyledDetailMovie>
        <div>
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
        </div>
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <button>Watch</button>
        </div>
      </StyledDetailMovie>
    </>
  );
}

export default DetailMovie;
