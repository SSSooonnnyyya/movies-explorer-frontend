import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import Menu from "../Menu/Menu";

function Header(props) {
  const location = useLocation();
  const [menuIsOpened, setMenuIsOpened] = React.useState(false);

  function onMenuClick() {
    setMenuIsOpened(true);
  }

  if (location.pathname === "/") {
    return (
      <header className="header">
        <Link to="/" className="header__logo"></Link>
        <div className="header__info">
          <Link to="/sign-up" className="header__link">
            Регистрация
          </Link>
          <Link to="/sign-in" className="header__button">
            Войти
          </Link>
        </div>
      </header>
    );
  } else if (
    location.pathname === "/sign-in" ||
    location.pathname === "/sign-up"
  ) {
    return;
  } else if (
    location.pathname === "/profile" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies"
  ) {
    return (
      <header className="header header_type_profile">
        <Link to="/" className="header__logo"></Link>
        <div className="header__links">
          <Link to="/movies" className="header__profile-link">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="header__profile-link">
            Сохранённые фильмы
          </Link>
          <Link to="/profile" className="header__profile-link">
            Аккаунт
          </Link>
          <Link to="/profile" className="header__profile-logo"></Link>
        </div>
        <div className="header__menu" onClick={onMenuClick}></div>
        {menuIsOpened && (
          <Menu isOpened={menuIsOpened} setMenuIsOpened={setMenuIsOpened} />
        )}
      </header>
    );
  }
}
export default Header;
