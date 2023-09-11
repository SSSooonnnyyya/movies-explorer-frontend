import React from "react";
import "./movie.css";
import { api } from "../../utils/MainApi";

function SavedMovieCard(props) {

  const hours = Math.floor(props.duration/60);
  const minutes = props.duration - hours*60;

  function onMovieDelete() {
    api
      .deleteMovie(props.movie._id)
      .then(() => {
        props.setSavedMovies((state) => state.filter((m) => m._id !== props.movie._id));
        props.setFilteredSavedMovies((state) => state.filter((m) => m._id !== props.movie._id));
      })
      .catch((res) => {
        console.log(res.message);
      });
  }

  function onMaskClick() {
    window.open(props.trailerLink, "_blank", "noopener,noreferrer");
  }
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

          <button
            type="button"
            onClick={onMovieDelete}
            className="movie__delete-button"
          ></button>
      </div>
    );
  }

export default SavedMovieCard;
