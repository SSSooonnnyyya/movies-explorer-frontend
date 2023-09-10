import React from "react";
import "./saved-movies.css";
import SearchSavedForm from "../SearchForm/SearchSavedForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { api } from "../../utils/MainApi";

function SavedMovies(props) {
  const [showNotification, setShowNotification] = React.useState(false);
  const [showError, setShowError] = React.useState(false);

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState([]);

  React.useEffect(() => {
    api
      .getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
        setFilteredSavedMovies(movies);
      })
      .catch((err) => {
        console.log(err);
        setShowError(true);
      });
  }, []);

  function loadSavedMovies(filter, isShort) {
    setShowNotification(false);
    const updatedMovies = savedMovies.filter((savedMovie) => {
      const searchResult =
        savedMovie.nameRU.toLowerCase().includes(filter.toLowerCase()) ||
        savedMovie.nameEN.toLowerCase().includes(filter.toLowerCase());
      if (isShort) {
        return searchResult && savedMovie.duration <= 40;
      } else {
        return searchResult;
      }
    });
    setFilteredSavedMovies(updatedMovies);
    if (updatedMovies.length === 0) {
      setShowNotification(true);
    }
  }

  return (
    <div className="saved-movies">
      <SearchSavedForm loadSavedMovies={loadSavedMovies} />
      <MoviesCardList
        savedMovies={filteredSavedMovies}
        showNotification={showNotification}
        showError={showError}
        setSavedMovies={setFilteredSavedMovies}
      />
      <div className="saved-movies__space"></div>
    </div>
  );
}

export default SavedMovies;
