// src/components/MovieReviews/MovieReviews.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/tmdbAPI";
import css from "./MovieReviews.module.css";

function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then((data) => setReviews(data.results))
      .catch(console.error);
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>No reviews found.</p>;
  }

  return (
    <ul className={css.movieReviews}>
      {reviews.map((review) => (
        <li key={review.id}>
          <h4>Author: {review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;
