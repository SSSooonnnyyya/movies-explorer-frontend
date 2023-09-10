import React, { useState } from "react";
import Form from "../Form/Form";
import { api } from "../../utils/MainApi";

function Login(props) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .login(formValue.email, formValue.password)
      .then((res) => {
        props.onLogin(res.token)
      })
      .catch((res) => {
        setError(res.message);
      });
  };

  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(undefined);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
    if (e.target.form.checkValidity()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <Form
      name="login"
      title="Рады видеть!"
      onSubmit={handleSubmit}
      buttonName="Войти"
      question="Ещё не зарегистрированы?"
      questionLink="/signup"
      linkText="Регистрация"
      isDisabled={isDisabled}
      error={error}
    >
      <label className="form__label">E-mail</label>
      <input
        required
        className="form__input"
        id="email"
        name="email"
        type="email"
        placeholder="E-mail"
        pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
        onChange={handleChange}
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
        onChange={handleChange}
      />
      <span className="form__input-error">Что-то пошло не так...</span>
    </Form>
  );
}

export default Login;
