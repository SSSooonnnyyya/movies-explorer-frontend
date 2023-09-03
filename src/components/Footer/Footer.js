import React from "react";
import "./footer.css";
import { useLocation } from "react-router-dom";

function Footer(props) {
  const location = useLocation();
  if (
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies"
  ) {
    return (
      <footer className="footer">
        <h2 className="footer__author">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__general">
          <p className="footer__year">&copy;2020</p>
          <ul className="footer__source">
            <a className="footer__element" href="https://practicum.yandex.ru" target="_blank">Яндекс.Практикум</a>
            <a className="footer__element" href="https://github.com" target="_blank">Github</a>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
