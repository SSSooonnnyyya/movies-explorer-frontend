import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

function Error(props) {
  return (
    <div className="error">
      <div className="error__container">
        <h2 className="error__code">{props.code}</h2>
        <p className="error__message">{props.message}</p>
      </div>
      <Link to="/" className="error__button">
        Назад
      </Link>
    </div>
  );
}
export default Error;
