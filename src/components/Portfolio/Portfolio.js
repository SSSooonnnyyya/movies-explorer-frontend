import React from "react";
import "./portfolio.css";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__element">
        <h3 className=" portfolio__point">Статичный сайт</h3>
        <a
          className="portfolio__link"
          href="https://github.com/"
          target="_blank"
        ></a>
      </div>
      <div className="portfolio__element">
        <h3 className=" portfolio__point">Адаптивный сайт</h3>
        <a
          className="portfolio__link"
          href="https://github.com/"
          target="_blank"
        ></a>
      </div>
      <div className="portfolio__element">
        <h3 className=" portfolio__point">Одностраничное приложение</h3>
        <a
          className="portfolio__link"
          href="https://github.com/"
          target="_blank"
        ></a>
      </div>
    </section>
  );
}

export default Portfolio;
