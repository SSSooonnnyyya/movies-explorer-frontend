import React from "react";
import { initialMovies } from "../../utils/constants";
import Movie from "../MoviesCard/MoviesCard";
import "./movie-list.css";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const location = useLocation();
  const [movies, setMovies] = React.useState(initialMovies);

  function updateMovies(id) {
    setMovies((prev) => {
      const movie = prev.find((movie) => movie.id === id);
      movie.isSaved = !movie.isSaved;
      return [...prev];
    });
  }

  if (location.pathname === "/movies") {
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <Movie
            link={movie.link}
            name={movie.name}
            duration={movie.duration}
            isSaved={movie.isSaved}
          ></Movie>
        ))}
      </div>
    );
  } else if (location.pathname === "/saved-movies") {
    return (
      <div className="movie-list">
        {movies
          .filter((movie) => movie.isSaved)
          .map((movie) => (
            <Movie
              movieId={movie.id}
              link={movie.link}
              name={movie.name}
              duration={movie.duration}
              isSaved={movie.isSaved}
              updateMovies={updateMovies}
            ></Movie>
          ))}
      </div>
    );
  }
}

export default MoviesCardList;
