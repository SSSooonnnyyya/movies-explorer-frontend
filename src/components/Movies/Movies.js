import React from "react";
import "./movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div className="movies">
      <SearchForm setIsLoading={setIsLoading}/>
      {isLoading ? 
      <Preloader /> : 
      <MoviesCardList />
      }
      <button type="button" className="movies__button">Ещё</button>
    </div>
  );
}

export default Movies;
