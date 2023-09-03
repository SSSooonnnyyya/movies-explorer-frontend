import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

function Error(props) {
  return (
    <section className="error">
      <div className="error__container">
        <h1 className="error__code">{props.code}</h1>
        <p className="error__message">{props.message}</p>
      </div>
      <Link to="/" className="error__button">
        Назад
      </Link>
    </section>
  );
}
export default Error;
