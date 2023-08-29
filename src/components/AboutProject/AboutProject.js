import React from "react";
import "./project.css";

function AboutProject(props) {
  return (
    <section className="project" id="project">
      <h2 className="project__title">О проекте</h2>
      <div className="project__info">
        <div className="project__element">
          <h3 className="project__detail">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project__discription">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="project__element">
          <h3 className="project__detail">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project__discription">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project__schema">
        <p className="project__block1">1 неделя</p>
        <p className="project__block2">4 недели</p>
        <p className="project__text">Back-end</p>
        <p className="project__text">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
