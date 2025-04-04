// src/services/tmdbAPI.js
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

// 1. Trending movies (Home Page)
export async function getTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?language=en-US`,
    options
  );
  return response.data.results; // array of movie objects
}

// 2. Search for movies
export async function searchMovies(query) {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data.results; // array of movie objects
}

// 3. Movie details
export async function getMovieDetails(movieId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?language=en-US`,
    options
  );
  return response.data; // single movie object
}

// 4. Movie credits (cast)
export async function getMovieCredits(movieId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?language=en-US`,
    options
  );
  return response.data; // object with cast/crew arrays
}

// 5. Movie reviews
export async function getMovieReviews(movieId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?language=en-US`,
    options
  );
  return response.data; // object with results array of reviews
}
