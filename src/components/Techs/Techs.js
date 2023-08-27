import React from "react";
import "./tech.css";

function Techs(props) {
  return (
    <section className="tech" id="tech">
      <h2 className="tech__title">Технологии</h2>
      <div className="tech__info">
        <h3 className="tech__number">7 технологий</h3>
        <p className="tech__discription">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <div className="tech__technologies">
        <div className="tech__block">HTML</div>
        <div className="tech__block">CSS</div>
        <div className="tech__block">JS</div>
        <div className="tech__block">React</div>
        <div className="tech__block">Git</div>
        <div className="tech__block">Express.js</div>
        <div className="tech__block">mongo.DB</div>
      </div>
    </section>
  );
}

export default Techs;
