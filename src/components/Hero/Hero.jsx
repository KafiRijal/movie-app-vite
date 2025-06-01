import { useEffect, useState } from "react";
import styled from "styled-components";

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

  button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #4361ee;
    color: #fff;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
    margin-left: 50px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    /*
   * Nothing TODO Here.
   * We dont change style Hero. 
   */
  }

  /* Large Screen */
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
    flex-basis: 60%;
  }
`;

const HeroRight = styled.div`
  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;

function Hero() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

      const response = await fetch(url);
      const data = await response.json();

      setMovie(data);
    }

    fetchMovie();
  }, []);

  return (
    <StyleHero>
      <section>
        <HeroLeft>
          <h2>{movie.Title}</h2>
          <h3>Genre: {movie.Genre}</h3>
          <p>{movie.Plot}</p>
          <button>Watch</button>
        </HeroLeft>
        <HeroRight>
          <img src={movie.Poster} alt={movie.Title} />
        </HeroRight>
      </section>
    </StyleHero>
  );
}
export default Hero;
