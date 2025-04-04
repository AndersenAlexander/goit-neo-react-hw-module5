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

## Design

![Screenshot 2025-04-04 195747](https://github.com/user-attachments/assets/22c08ca9-1354-40db-94cc-549f2e035c33)
![Screenshot 2025-04-04 195912](https://github.com/user-attachments/assets/d33b01b3-5637-429a-91c9-bdeef821e425)


## Project Structure

goit-neo-react-hw-module5/
├── public/
│   └── AlexanderAndersen.jpg         # Background image
├── src/
│   ├── components/                     # Reusable components
│   │   ├── Navigation/
│   │   │   ├── Navigation.jsx
│   │   │   └── Navigation.module.css
│   │   ├── MovieList/
│   │   │   ├── MovieList.jsx
│   │   │   └── MovieList.module.css
│   │   ├── MovieCast/
│   │   │   ├── MovieCast.jsx
│   │   │   └── MovieCast.module.css
│   │   └── MovieReviews/
│   │       ├── MovieReviews.jsx
│   │       └── MovieReviews.module.css
│   ├── pages/                          # Route pages
│   │   ├── HomePage/
│   │   │   ├── HomePage.jsx
│   │   │   └── HomePage.module.css
│   │   ├── MoviesPage/
│   │   │   ├── MoviesPage.jsx
│   │   │   └── MoviesPage.module.css
│   │   ├── MovieDetailsPage/
│   │   │   ├── MovieDetailsPage.jsx
│   │   │   └── MovieDetailsPage.module.css
│   │   └── NotFoundPage/
│   │       ├── NotFoundPage.jsx
│   │       └── NotFoundPage.module.css
│   ├── services/                       # Functions for interacting with the TMDB API
│   │   └── tmdbAPI.js
│   ├── App.jsx                         # Main routes configuration with lazy loading
│   ├── main.jsx                        # Application entry point
│   └── index.css                       # Global styles
├── .env                                # Environment variables (make sure to add this to .gitignore)
├── package.json
└── README.md                           # This file


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above recommended)
- A TMDB API key (use the API Read Access Token)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/goit-neo-react-hw-module5.git
   cd goit-neo-react-hw-module5

2. **Install dependencies:**

   ```bash
   npm install
or
   ```bash
   yarn install
   

 3. **Configure Environment Variables:**
Create a .env file in the root directory and add the following line (replace api_read_access_token with your actual TMDB token):

   ```bash
   VITE_TMDB_API_TOKEN=api_read_access_token


4. **Run the application locally:**

   ```bash
   gnpm run dev

Then open http://localhost:5173 in your browser.

## Deployment
The application is ready to be deployed on Vercel or any other hosting platform that supports React. Remember to set up the environment variables on your deployment platform.

## Contributing
Contributions are welcome! If you have suggestions for improvements or find issues, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
