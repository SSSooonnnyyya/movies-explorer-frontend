import React from "react";
import "./menu.css";
import { Link, useLocation } from "react-router-dom";

function Menu(props) {
  const location = useLocation();

  function onCloseClick() {
    props.setMenuIsOpened(false);
  }

  if (props.isOpened) {
    return (
      <div className="menu menu_opened ">
        <div className="menu__container">
          <div onClick={onCloseClick} className="menu__closure"></div>
          <div className="menu__links">
            <div className="menu__general">
              <Link to="/" className="menu__link">
                Главная
              </Link>
              <Link
                to="/movies"
                className={`menu__link ${
                  location.pathname === "/movies"
                    ? "menu__link_type_underlined"
                    : ""
                }`}
              >
                Фильмы
              </Link>
              <Link
                to="/saved-movies"
                className={`menu__link ${
                  location.pathname === "/saved-movies"
                    ? "menu__link_type_underlined"
                    : ""
                }`}
              >
                Сохранённые фильмы
              </Link>
            </div>
            <div className="menu__profile">
              <Link
                to="/profile"
                className={`menu__link_type_profile ${
                  location.pathname === "/profile"
                    ? "menu__link_type_underlined"
                    : ""
                }`}
              >
                Аккаунт
              </Link>
              <Link to="/profile" className="menu__logo"></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
