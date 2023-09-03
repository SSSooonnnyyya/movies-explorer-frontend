import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";

function Profile(props) {
  const [buttonIsActive, setButtonIsActive] = React.useState(false);
  const [editIsActive, setEditIsActive] = React.useState(true);
  const [inputIsActive, setInputIsActive] = React.useState(true);

  function onEditClick() {
    setButtonIsActive(!buttonIsActive);
    setEditIsActive(!editIsActive);
    setInputIsActive(!inputIsActive);
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {`${props.userName}$`}!</h1>
      <div className="profile__element">
        <p className="profile__text">Имя</p>
        <input
          disabled={inputIsActive}
          minLength="2"
          maxLength="40"
          className="profile__input"
          placeholder={`${props.userName}`
        }
        ></input>
      </div>
      <div className="profile__element">
        <p className="profile__text">E-mail</p>
        <input
          type="email"
          disabled={inputIsActive}
          className="profile__input"
          placeholder={`${props.userEmail}`}
        ></input>
      </div>
      {editIsActive && (
        <button type="button" onClick={onEditClick} className="profile__edit-button">
          Редактировать
        </button>
      )}
      {editIsActive && (
        <Link to="/signin" className="profile__link">
          Выйти из аккаунта
        </Link>
      )}
      {buttonIsActive && <span className="profile__input-error">ssssss</span>}
      {buttonIsActive && (
        <button type="submit" onClick={onEditClick} className="profile__save-button">
          Сохранить
        </button>
      )}
    </section>
  );
}

export default Profile;
