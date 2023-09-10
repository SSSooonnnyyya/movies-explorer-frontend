import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies/SavedMovies";
import Error from "./Error/Error";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import ProtectedRouteElement from "./ProtectedRouteElement/ProtectedRouteElement";
import { api } from "../utils/MainApi";
import { useNavigate } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setIsLoggedIn] = React.useState(localStorage.getItem("jwt")?true:false);
  const navigate = useNavigate();

  function handleLogOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("searched-movies");
    localStorage.removeItem("search-value");
    localStorage.removeItem("switch-status");
    setIsLoggedIn(false);
  }

  React.useEffect(() => {
    // настало время проверить токен
    validateToken();
  }, [loggedIn]);

  function validateToken() {
    // если у пользователя есть токен в localStorage,
    // эта функция проверит валидность токена
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      // проверим токен
      api
        .getProfile(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);

            setCurrentUser((user) => ({
              ...user,
              email: res.email,
              name: res.name,
            }));

            //navigate("/movies", { replace: true });
          }
        })
        .catch(handleLogOut);
    }
  }

  function handleLogin(token) {
    localStorage.setItem("jwt", token);
    api._headers = {
      authorization: token,
      "Content-Type": "application/json",
    };
    setIsLoggedIn(true);
    navigate("/movies", { replace: true });
    api.getProfile().then((profile) => {
      setCurrentUser((user) => ({
        ...user,
        ...profile,
      }));
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggedInStatus={loggedIn} />
        <main className="main">
          <Routes>
            <Route path="/" element={<Main />} />

            <Route
              path="/movies"
              element={
                <ProtectedRouteElement
                  element={Movies}
                  loggedInStatus={loggedIn}
                />
              }
            />

            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  loggedInStatus={loggedIn}
                />
              }
            />

            <Route path="/signin" element={<Login onLogin={handleLogin} />} />

            <Route path="/signup" element={<Register onLogin={handleLogin} />} />

            <Route
              path="/profile"
              element={
                <ProtectedRouteElement
                  element={Profile}
                  setCurrentUser={setCurrentUser}
                  loggedInStatus={loggedIn}
                  handleLogOut={handleLogOut}
                />
              }
            />

            <Route
              path="/*"
              element={<Error code="404" message="Страница не найдена" />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
