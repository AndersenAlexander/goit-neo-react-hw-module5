// src/pages/HomePage/HomePage.jsx
import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../services/tmdbAPI";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <div className={css.homePage}>
      <h1>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
