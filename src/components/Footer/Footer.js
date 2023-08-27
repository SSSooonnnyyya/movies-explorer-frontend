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
          <div className="footer__source">
            <p className="footer__element">Яндекс.Практикум</p>
            <p className="footer__element">Github</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
