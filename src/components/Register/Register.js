import React from "react";
import Form from "../Form/Form";

function Register(props) {
  function handleSubmit(e) {
  }

  return (
    <Form
      name="register"
      title="Добро пожаловать!"
      onSubmit={handleSubmit}
      buttonName="Зарегистрироваться"
      question="Уже зарегистрированы?"
      questionLink="/sign-in"
      linkText="Войти"
    >
      <label className="form__label">Имя</label>
      <input
        className="form__input"
        name="fullname"
        id="fullname"
        required
        minLength="2"
        maxLength="40"
      />
      <label className="form__label">E-mail</label>
      <input
        required
        className="form__input"
        id="email"
        name="email"
        type="email"
      />

      <label className="form__label">Пароль</label>
      <input required className="form__input" id="password" name="password" />
      <span className="form__input-error">Что-то пошло не так...</span>
    </Form>
  );
}

export default Register;
