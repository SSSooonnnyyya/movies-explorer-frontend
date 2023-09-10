import React from "react";
import "./error.css";
import { useNavigate } from "react-router-dom";

function Error(props) {
  const navigate = useNavigate();

  return (
    <section className="error">
      <div className="error__container">
        <h1 className="error__code">{props.code}</h1>
        <p className="error__message">{props.message}</p>
      </div>
      <div className="error__button" onClick={() => navigate(-1)}>
        Назад
      </div>
    </section>
  );
}
export default Error;
