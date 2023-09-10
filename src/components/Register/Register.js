import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import { api } from "../../utils/MainApi";

function Register(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .register(formValue.name, formValue.email, formValue.password)
      .then((res) => {
        return api
        .login(formValue.email, formValue.password)
        .then((res) => {
          props.onLogin(res.token)
        })
      })
      .catch((res) => {
        setError(res.message);
      });
  };
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(undefined);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

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
      name="register"
      title="Добро пожаловать!"
      onSubmit={handleSubmit}
      buttonName="Зарегистрироваться"
      question="Уже зарегистрированы?"
      questionLink="/signin"
      linkText="Войти"
      isDisabled={isDisabled}
      error={error}
    >
      <label className="form__label">Имя</label>
      <input
        className="form__input"
        name="name"
        id="name"
        required
        minLength="2"
        maxLength="40"
        placeholder="Имя"
        onChange={handleChange}
        type="text"
        pattern="[A-Za-zа-яА-ЯёЁ\- ]+"
      />
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

export default Register;
