// src/pages/MoviesPage/MoviesPage.jsx
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/tmdbAPI";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query === "") return; // don't fetch if no query
    searchMovies(query).then(setMovies).catch(console.error);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.currentTarget.elements.query.value.trim();
    if (!value) return;
    setSearchParams({ query: value });
  };

  return (
    <div className={css.moviesPage}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>

      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
