import React from "react";
import "./movie.css";
import { useLocation } from "react-router-dom";
import { api } from "../../utils/MainApi";

function MoviesCard(props) {
  const location = useLocation();
  const [movieIsSaved, setMovieIsSaved] = React.useState(props.isSaved);
  const hours = Math.floor(props.duration/60);
  const minutes = props.duration - hours*60;

  function onSaveClick() {
    api
      .saveMovie(props.movie)
      .then((savedMovie) => {
        props.setMovies((prev) => {
          const movie = prev.find((movie) => movie.id === props.movie.id);
          movie.isSaved = true;
          movie._id = savedMovie._id;
          localStorage.setItem(
            "searched-movies",
            JSON.stringify(prev)
          );
          return [...prev];
        });
        setMovieIsSaved(true);
      })
      .catch((res) => {
        console.log(res.message);
      });
  }

  function onDeleteClick() {
    api
      .deleteMovie(props.movie._id)
      .then(() => {
        props.setMovies((prev) => {
          const movie = prev.find((movie) => movie.id === props.movie.id);
          movie.isSaved = false;
          movie._id = undefined;
          localStorage.setItem(
            "searched-movies",
            JSON.stringify(prev)
          );
          return [...prev];
        });
        setMovieIsSaved(false);
      })
      .catch((res) => {
        console.log(res.message);
      });
  }

  function onMaskClick() {
    window.open(props.trailerLink, "_blank", "noopener,noreferrer");
  }

  if (location.pathname === "/movies") {
    return (
      <div className="movie">
        <img
          className="movie__mask"
          src={props.link}
          alt={props.name}
          onClick={onMaskClick}
        />
        <div className="movie__container">
          <h2 className="movie__title">{props.name}</h2>
          <p className="movie__duration">{`${hours}ч ${minutes}м`}</p>
        </div>
        {movieIsSaved ? (
          <div className="movie__save-icon" onClick={onDeleteClick}></div>
        ) : (
          <button
            type="button"
            onClick={onSaveClick}
            className="movie__save-button"
          >
            Сохранить
          </button>
        )}
      </div>
    );
  } 
}

export default MoviesCard;
