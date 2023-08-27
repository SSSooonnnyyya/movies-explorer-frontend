import React from "react";
import { Link } from "react-router-dom";
import "./form.css";

function Form(props) {
  function handleFormSubmit(e) {
    e.preventDefault();
    props.onSubmit(e)
  }

  return (
    <div className="form">
      <Link to="/" className="form__logo"></Link>
      <h2 className="form__greeting">{props.title}</h2>
      <form onSubmit={handleFormSubmit} className="form__body">
        {props.children}

        <button
          type="submit"
          className={`form__submit-botton form__submit-botton_type_${props.name}`}
          onClick={props.onSubmit}
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
    </div>
  );
}

export default Form;
