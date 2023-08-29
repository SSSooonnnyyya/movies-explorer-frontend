import React from "react";
import "./saved-movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList />
      <div className="saved-movies__space"></div>
    </section>
  );
}

export default SavedMovies;
