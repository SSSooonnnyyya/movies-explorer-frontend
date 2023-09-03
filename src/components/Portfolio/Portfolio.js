import React from "react";
import "./portfolio.css";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <a
          className="portfolio__link"
          href="https://github.com/SSSooonnnyyya/how-to-learn"
          target="_blank"
        >
          <h3 className="portfolio__point">Статичный сайт</h3>
          <div className="portfolio__icon"></div>
        </a>

        <a
          className="portfolio__link"
          href="https://github.com/SSSooonnnyyya/russian-travel/tree/main"
          target="_blank"
        >
          <h3 className="portfolio__point">Адаптивный сайт</h3>
          <div className="portfolio__icon"></div>
        </a>

        <a
          className="portfolio__link"
          href="https://github.com/SSSooonnnyyya/react-mesto-api-full-gha"
          target="_blank"
        >
          <h3 className="portfolio__point">Одностраничное приложение</h3>
          <div className="portfolio__icon"></div>
        </a>
      </ul>
    </section>
  );
}

export default Portfolio;
