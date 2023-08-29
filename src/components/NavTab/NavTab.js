import React from "react";
import "./navtab.css";

function NavTab(props) {
  return (
    <ul className="navtab">
      <a className="navtab__element" href="#project">
        О проекте
      </a>
      <a className="navtab__element" href="#tech">
        Технологии
      </a>
      <a className="navtab__element" href="#student">
        Студент
      </a>
    </ul>
  );
}

export default NavTab;
