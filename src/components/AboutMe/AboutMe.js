import React from "react";
import "./student.css";

function AboutMe(props) {
  return (
    <section className="student" id="student">
      <h2 className="student__title">Студент</h2>
      <div className="student__info">
        <div className="student__description">
          <h3 className="student__name">Виталий</h3>
          <p className="student__spec">Фронтенд-разработчик, 30 лет</p>
          <p className="student__pers">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб&#8209;разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="student__link"
            href="https://github.com/SSSooonnnyyya"
            target="_blank"
          >
            Github
          </a>
        </div>
        <div className="student__picture"></div>
      </div>
    </section>
  );
}

export default AboutMe;
