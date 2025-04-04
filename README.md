# Movie Search App

This is a React-based movie search application built with Vite. It interacts with **The Movie Database (TMDB) API** to display trending movies, search movies by title, and show detailed information for each movie (including cast and reviews).

## Features

- **Home Page:** Displays a list of trending movies fetched from TMDB.
- **Movies Page:** Allows users to search for movies by keyword. The search results are displayed as a list.
- **Movie Details Page:** Provides detailed information about a selected movie, including:
  - Basic movie details (title, overview, rating, genres, etc.)
  - **Cast:** Information about the movie cast (displayed via nested routes).
  - **Reviews:** User reviews for the movie (displayed via nested routes).
- **Not Found Page:** Shows an error message and a link back to the Home Page for invalid routes.
- **Navigation:** A simple menu for navigating between Home and Movies pages.

## Technologies Used

- **React** – for building the user interface.
- **Vite** – for a fast and modern development environment.
- **React Router** – for client-side routing.
- **Axios** – for handling HTTP requests to the TMDB API.
- **CSS Modules** – for component-scoped styling.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above recommended)
- A TMDB API key (use the API Read Access Token)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/goit-neo-react-hw-module5.git
   cd goit-neo-react-hw-module5
