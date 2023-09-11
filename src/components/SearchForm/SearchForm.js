import React, { useState } from "react";
import "./search-form.css";

function SearchForm(props) {
  const [shortMovieActive, setShortMovieActive] = useState(
    localStorage.getItem("switch-status") === "true"
  );
  const [showBlankError, setShowBlankError] = useState(false);
  const [searchRequest, setSearchRequest] = useState(
    localStorage.getItem("search-value") || ""
  );

  React.useEffect(() => {
    props.loadMovies(searchRequest, shortMovieActive);
  }, []);

  function onSwitchClick() {
    props.loadMovies(searchRequest, !shortMovieActive);
    localStorage.setItem("switch-status", !shortMovieActive);
    setShortMovieActive((prev) => {
      return !prev;
    });
  }

  function Search(event) {
    event.preventDefault();
    setShowBlankError(false);
    if (!searchRequest) {
      setShowBlankError(true);
    } else {
      localStorage.setItem("search-value", searchRequest);
      localStorage.setItem("switch-status", shortMovieActive);
      return props.loadMovies(searchRequest, shortMovieActive);

      // props.setIsLoading((prev) => !prev);
    }
  }

  const handleMovieChange = (e) => {
    const value = e.target.value;
    setSearchRequest(value);
  };

  return (
    <section className="search-form">
      <form className="search-form__body" onSubmit={Search}>
        <div className="search-form__container">
          <div className="search-form__box">
            <input
              className="search-form__input"
              placeholder="Фильм"
              onChange={handleMovieChange}
              value={searchRequest}
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
            onClick={onSwitchClick}
            className={`search-form__switch-btn ${
              shortMovieActive ? "search-form__switch-btn_state_active" : ""
            }`}
          ></div>
          <p className="search-form__sign">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
