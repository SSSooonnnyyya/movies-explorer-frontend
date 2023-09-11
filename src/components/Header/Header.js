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

  if ((location.pathname === "/")&&(!props.loggedInStatus)) {
    return (
      <header className="header">
        <Link to="/" className="header__logo"></Link>
        <nav className="header__info">
          <Link to="/signup" className="header__link">
            Регистрация
          </Link>
          <Link to="/signin" className="header__button">
            Войти
          </Link>
        </nav>
      </header>
    );
  } else if (
    location.pathname === "/signin" ||
    location.pathname === "/signup"
  ) {
    return;
  } else if (
    location.pathname === "/profile" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" || ((location.pathname === "/")&&(props.loggedInStatus))
  ) {
    return (
      <header className="header header_type_profile">
        <Link to="/" className="header__logo"></Link>
        <nav className="header__links">
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
        </nav>
        <div className="header__menu" onClick={onMenuClick}></div>
        {menuIsOpened && (
          <Menu isOpened={menuIsOpened} setMenuIsOpened={setMenuIsOpened} />
        )}
      </header>
    );
  }
}
export default Header;
