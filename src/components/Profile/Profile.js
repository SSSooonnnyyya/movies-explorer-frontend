import React, { useState } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { api } from "../../utils/MainApi";
import {showValidationError} from "../../utils/utils"

function Profile(props) {
  const [buttonIsActive, setButtonIsActive] = useState(false);
  const [editIsActive, setEditIsActive] = useState(true);
  const [inputIsInactive, setInputIsInactive] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const currentUser = React.useContext(CurrentUserContext);

  function onEditClick() {
    setButtonIsActive(true);
    setEditIsActive(false);
    setInputIsInactive(false);
    setCompletion(false);
  }

  const [userName, setUserName] = useState(currentUser.name);
  const [userEmail, setUserEmail] = useState(currentUser.email);
  const [error, setError] = useState(undefined);
  const [completion, setCompletion] = useState(false);

  /*const [formValue, setFormValue] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });*/

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .changeProfile(userName, userEmail)
      .then((profile) => {
        props.setCurrentUser((user) => ({
          ...user,
          ...profile,
        }));
        setButtonIsActive(false);
        setEditIsActive(true);
        setInputIsInactive(true);
        setError(undefined);
        setCompletion(true);
        setIsDisabled(true);
      })
      
      .catch((res) => {
        setError(res.message);
        setUserName(currentUser.name);
        setUserEmail(currentUser.email);
        setIsDisabled(true);
        setCompletion(false);
      });

  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setUserName(value);
    if (e.target.checkValidity()&&((e.target.value !== currentUser.name)||(userEmail !== currentUser.email))) {
      setIsDisabled(false);
    } else {
      showValidationError(e);
      setIsDisabled(true);
    }
  };

    const handleEmailChange = (e) => {
      const value = e.target.value;
      setUserEmail(value);
      if (e.target.checkValidity()&&((e.target.value !== currentUser.email)||(userName !== currentUser.name))) {
        setIsDisabled(false);
      } else {
        showValidationError(e);
        setIsDisabled(true);
      }
    };

  return (
    <form className="profile" onSubmit={handleSubmit} >
      <h1 className="profile__title">Привет, {userName}!</h1>
      <div className="profile__element">
        <p className="profile__text">Имя</p>
        <input
          id="name"
          disabled={inputIsInactive}
          minLength="2"
          maxLength="40"
          className="profile__input"
          type="text"
          pattern="[A-Za-zа-яА-ЯёЁ\- ]+"
          onChange={handleNameChange}
          value={userName}
          placeholder="Имя"
        ></input>
      </div>
      <div className="profile__element">
        <p className="profile__text">E-mail</p>
        <input
          id="email"
          type="email"
          disabled={inputIsInactive}
          className="profile__input"
          pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
          onChange={handleEmailChange}
          value={userEmail}
          placeholder="Email"
        ></input>
      </div>
      {editIsActive && (
        <button type="button" onClick={onEditClick} className="profile__edit-button">
          Редактировать
        </button>
      )}
      {editIsActive && (
        <Link to="/" className="profile__link" onClick={props.handleLogOut}>
          Выйти из аккаунта
        </Link>
      )}
      {completion && (<span className="profile__confirmation">Даннаые успешно обновлены</span>)}
      <span className="profile__input-error">{error}</span>
      {buttonIsActive && (
        <button type="submit" className="profile__save-button" disabled={isDisabled}>
          Сохранить
        </button>
      )}
    </form>
  );
}

export default Profile;
