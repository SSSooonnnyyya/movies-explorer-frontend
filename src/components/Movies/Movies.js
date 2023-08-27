import React from "react";
import "./movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <section className="movies">
      <SearchForm setIsLoading={setIsLoading}/>
      <div className="movies__line"></div>
      {isLoading ? 
      <Preloader /> : 
      <MoviesCardList />
      }
      <button className="movies__button">Ещё</button>
    </section>
  );
}

export default Movies;
