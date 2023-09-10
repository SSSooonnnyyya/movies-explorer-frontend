import React, { useState } from "react";
import "./search-form.css";

function SearchSavedForm(props) {
  const [shortSavedMovieActive, setSavedShortMovieActive] = useState(false);
  const [showBlankError, setShowBlankError] = useState(false);
  const [savedSearchRequest, setSavedSearchRequest] = useState("");

  function onSwitchSaved() {
    props.loadSavedMovies(savedSearchRequest, !shortSavedMovieActive);
    setSavedShortMovieActive((prev) => {
      return !prev;
    });
  }

  function SearchSaved(event) {
    event.preventDefault();
    setShowBlankError(false);
    if (!savedSearchRequest) {
      setShowBlankError(true);
    } else {
      return props.loadSavedMovies(savedSearchRequest, shortSavedMovieActive);
    }
  }

  const handleMovieChange = (e) => {
    const value = e.target.value;
    setSavedSearchRequest(value);
  };

  return (
    <section className="search-form">
      <form className="search-form__body" onSubmit={SearchSaved}>
        <div className="search-form__container">
          <div className="search-form__box">
            <input
              className="search-form__input"
              placeholder="Фильм"
              onChange={handleMovieChange}
              value={savedSearchRequest}
            />
            {showBlankError && (
              <span className="search-form__error">
                Нужно ввести ключевое слово
              </span>
            )}
          </div>
          <button type="submit" className="search-form__button">
            Найти
          </button>
        </div>
        <div className="search-form__filter">
          <div
            onClick={onSwitchSaved}
            className={`search-form__switch-btn ${
              shortSavedMovieActive
                ? "search-form__switch-btn_state_active"
                : ""
            }`}
          ></div>
          <p className="search-form__sign">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchSavedForm;
