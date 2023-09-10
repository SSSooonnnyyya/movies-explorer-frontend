import React from "react";
import { Link } from "react-router-dom";
import "./form.css";

function Form(props) {
  function handleFormSubmit(e) {
    e.preventDefault();
    props.onSubmit(e)
  }

  return (
    <section className="form">
      <Link to="/" className="form__logo"></Link>
      <h1 className="form__greeting">{props.title}</h1>
      <form onSubmit={handleFormSubmit} className="form__body">
        {props.children}
        {props.error && <span className="form__submit-error">{props.error}</span>}
        <button
          type="submit"
          className={`form__submit-botton form__submit-botton_type_${props.name}`}
          onClick={props.onSubmit}
          disabled={props.isDisabled}
        >
          {props.buttonName}
        </button>
        <div className="form__question">
          <p className="form__text">{props.question}</p>
          <Link to={`${props.questionLink}`} className="form__link">
            {props.linkText}
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Form;
