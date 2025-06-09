import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import { useState } from "react";
import AddMovieForm from "../components/AddMovie/AddMovie";
import data from "../utils/constants/data";
import Button from "../components/UI/Button/Index";
function Home() {
  const [movies, setMovies] = useState(data);
  return (
    <>
      <div>
        <main>
          <Hero />
          {/* <Button variant="primary" size="sm">
            {" "}
            Lihat{" "}
          </Button>
          <Button variant="secondary" size="lg" full>
            {" "}
            Lihat{" "}
          </Button> */}
          <Movies movies={movies} setMovies={setMovies} />
          <AddMovieForm movies={movies} setMovies={setMovies} />
        </main>
      </div>
    </>
  );
}
export default Home;
