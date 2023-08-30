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

function App() {

  return (
    <div className="page">
      <Header />
      <main className="main">
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/saved-movies" element={<SavedMovies />} />

        <Route path="/signin" element={<Login />} />

        <Route path="/signup" element={<Register />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/*" element={<Error code="404" message="Страница не найдена"/>} />

      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
