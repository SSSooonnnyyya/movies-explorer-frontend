import React from "react";
import "./movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { moviesApi } from "../../utils/MoviesApi";
import { api } from "../../utils/MainApi";

function Movies(props) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showNotification, setShowNotification] = React.useState(false);
  const [showError, setShowError] = React.useState(false);

  const [movies, setMovies] = React.useState(
    JSON.parse(localStorage.getItem("searched-movies")) || []
  );

  function loadMovies(filter, isShort) {
    setShowNotification(false);
    setIsLoading(true);
    api
      .getSavedMovies()
      .then((myMovies) => {
        return moviesApi.getMovies().then((response) => {
          setIsLoading(false);
          const updatedMovies = response.filter((movie) => {
            const searchResult =
              movie.nameRU.toLowerCase().includes(filter.toLowerCase()) ||
              movie.nameEN.toLowerCase().includes(filter.toLowerCase());
            if (isShort) {
              return searchResult && movie.duration <= 40;
            } else {
              return searchResult;
            }
          });
          updatedMovies.forEach((movie) => {
            const savedMovie = myMovies.find((m) => m.movieId === movie.id);
            if (savedMovie) {
              movie._id = savedMovie._id;
              movie.isSaved = true;
            }
          });
          setMovies(updatedMovies);
          localStorage.setItem(
            "searched-movies",
            JSON.stringify(updatedMovies)
          );
          if (updatedMovies.length === 0) {
            setShowNotification(true);
          }
        });
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setShowError(true);
      });
  }

  return (
    <div className="movies">
      <SearchForm
        loadMovies={loadMovies}
        setIsLoading={setIsLoading}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          setMovies={setMovies}
          showNotification={showNotification}
          showError={showError}
        />
      )}
    </div>
  );
}

export default Movies;
