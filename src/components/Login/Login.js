import React from "react";
import Form from "../Form/Form";

function Login(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form
      name="login"
      title="Рады видеть!"
      onSubmit={handleSubmit}
      buttonName="Войти"
      question="Ещё не зарегистрированы?"
      questionLink="/signup"
      linkText="Регистрация"
    >
      <label className="form__label">E-mail</label>
      <input
        required
        className="form__input"
        id="email"
        name="email"
        type="email"
        placeholder="E-mail"
      />

      <label className="form__label">Пароль</label>
      <input
        required
        className="form__input"
        id="password"
        name="password"
        minLength="5"
        maxLength="20"
        placeholder="Пароль"
      />
      <span className="form__input-error">Что-то пошло не так...</span>
    </Form>
  );
}

export default Login;
