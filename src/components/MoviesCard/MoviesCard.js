import React from "react";
import "./movie.css";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const location = useLocation();
  const [movieIsSaved, setMovieIsSaved] = React.useState(props.isSaved);

  function onMovieClick() {
    setMovieIsSaved((prev) => {
      return !prev;
    });
  }

  function onMovieDelete() {
    props.updateMovies(props.movieId);
  }

  if (location.pathname === "/movies") {
    return (
      <div className="movie">
        <img className="movie__mask" src={props.link} alt={props.name} />
        <div className="movie__container">
          <h2 className="movie__title">{props.name}</h2>
          <p className="movie__duration">{props.duration}</p>
        </div>
        {movieIsSaved ? (
          <div className="movie__save-icon"></div>
        ) : (
          <button onClick={onMovieClick} className="movie__save-button">
            Сохранить
          </button>
        )}
      </div>
    );
  } else if (location.pathname === "/saved-movies") {
    return (
      <div className="movie">
        <img className="movie__mask" src={props.link} alt={props.name} />
        <div className="movie__container">
          <h2 className="movie__title">{props.name}</h2>
          <p className="movie__duration">{props.duration}</p>
        </div>
        {movieIsSaved && (
          <button
            onClick={onMovieDelete}
            className="movie__delete-button"
          ></button>
        )}
      </div>
    );
  }
}

export default MoviesCard;
