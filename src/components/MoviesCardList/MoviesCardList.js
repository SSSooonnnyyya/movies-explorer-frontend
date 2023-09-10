import React, { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import SavedMovieCard from "../MoviesCard/SavedMovieCard";
import "./movie-list.css";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const location = useLocation();

  const [movieLength, setMovieLength] = React.useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    if (window.innerWidth > 1160) {
      setMovieLength(12);
    } else if (1160 >= window.innerWidth && window.innerWidth > 730) {
      setMovieLength(8);
    } else if (window.innerWidth <= 730) {
      setMovieLength(5);
    }

    window.addEventListener("resize", handleResize);

    // Очищаем слушатель событий при размонтировании компонента
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //return <div>Ширина экрана: {width}px</div>;

  function clickMoreMovies() {
    if (width > 1160) {
      setMovieLength((prev) => prev + 3);
    } else {
      setMovieLength((prev) => prev + 2);
    }
  }

  if (props.showNotification) {
    return <div className="movie__notification">Ничего не найдено</div>;
  }

  if (props.showError) {
    return (
      <div className="movie__notification">
        Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз
      </div>
    );
  }

  if (location.pathname === "/movies") {
    return (
      <section className="movie-section">
        <div className="movie-section__list">
          {props.movies?.slice(0, movieLength).map((movie, i) => (
            <MoviesCard
              key={i}
              link={movie.link}
              name={movie.name}
              duration={movie.duration}
              isSaved={movie.isSaved}
              trailerLink={movie.trailerLink}
              setMovies={props.setMovies}
              movie={movie}
            ></MoviesCard>
          ))}
        </div>
        {props.movies?.length > movieLength && (
          <button
            type="button"
            className="movie-section__button"
            onClick={clickMoreMovies}
          >
            Ещё
          </button>
        )}
      </section>
    );
  } else if (location.pathname === "/saved-movies") {
    return (
      <section className="movie-section">
        <div className="movie-section__list">
          {props.savedMovies?.map((movie, i) => (
              <SavedMovieCard
                key={i}
                movieId={movie.movieId}
                link={movie.image}
                name={movie.nameRU}
                duration={movie.duration}
                isSaved={movie.isSaved}
                setSavedMovies={props.setSavedMovies}
                movie={movie}
                trailerLink={movie.trailerLink}
              ></SavedMovieCard>
            ))}
        </div>
        {props.movies?.length > movieLength && (
          <button
            type="button"
            className="movie-section__button"
            onClick={clickMoreMovies}
          >
            Ещё
          </button>
        )}
      </section>
    );
  }
}

export default MoviesCardList;
