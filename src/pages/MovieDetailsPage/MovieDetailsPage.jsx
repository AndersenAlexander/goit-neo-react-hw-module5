// src/pages/MovieDetailsPage/MovieDetailsPage.jsx
import { useState, useEffect, Suspense } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { getMovieDetails } from "../../services/tmdbAPI";
import css from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  // fallback if there's no state location: go to /movies
  const backLinkHref = location.state?.from ?? "/movies";

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  if (!movie) return null;

  const { title, overview, poster_path, genres, vote_average } = movie;

  return (
    <div className={css.movieDetailsPage}>
      <Link to={backLinkHref}>Go back</Link>

      <div className={css.detailsWrapper}>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            width="200"
          />
        )}

        <div>
          <h2>{title}</h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres?.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>

      <div className={css.additionalInfo}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      {/* Nested routes: cast or reviews */}
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MovieDetailsPage;
