import React from "react";
import "./search-form.css";

function SearchForm(props) {
  const [shortMovieActive, setShortMovieActive] = React.useState(false);

  function onSwitchClick() {
    setShortMovieActive((prev) => {
      return !prev;
    });
  }

  function search() {
    props.setIsLoading((prev) => !prev);
  }

  return (
    <div className="search-form">
      <div className="search-form__container">
        <input className="search-form__input" placeholder="Фильм" />
        <button
          type="submit"
          className="search-form__button"
          onClick={search}
        >
          Найти
        </button>
      </div>
      <div className="search-form__filter">
        <div className="search-form__line"></div>
        <div
          onClick={onSwitchClick}
          className={`search-form__switch-btn ${
            shortMovieActive ? "search-form__switch-btn_state_active" : ""
          }`}
        ></div>
        <p className="search-form__sign">Короткометражки</p>
      </div>
    </div>
  );
}

export default SearchForm;
