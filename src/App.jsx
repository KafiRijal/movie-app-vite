import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/Create";
import PopularMovie from "./pages/Popular";
import NowPlayingMovie from "./pages/NowPlaying";
import TopRatedMovie from "./pages/TopRated";
import Layout from "./Layout/Index";
import Counter from "./components/Counter/Counter";
import DetailMovie from "./pages/detail";
import { useState } from "react";
import data from "./utils/constants/data";
import MoviesContext from "./components/context/MovieContext";

function App() {
  const [movies, setMovies] = useState(data);
  const contextValue = {
    movies,
    setMovies,
  };
  return (
    <>
      <MoviesContext.Provider value={contextValue}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/create" element={<CreateMovie />}></Route>
            <Route path="/movie/popular" element={<PopularMovie />}></Route>
            <Route path="/movie/now" element={<NowPlayingMovie />}></Route>
            <Route path="/movie/top" element={<TopRatedMovie />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
            <Route path="/movie/:id" element={<DetailMovie />}></Route>
          </Routes>
        </Layout>
      </MoviesContext.Provider>
    </>
  );
}

export default App;
