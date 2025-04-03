import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, eu sou <span className="purple">Rodrigo M. Xavier  </span>
            do <span className="purple"> Distrito Federal, Brasil.</span>
            <br />
            Estou finalizando minha graduação em Engenharia de Computação pela UnB
            <br />
            <br />
            Além de programar, estes são alguns hobbies que tenho:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Fazer Exercícios
            </li>
            <li className="about-activity">
              <ImPointRight /> Recentemente tenho tentado bordados
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be excellent to each other!"{" "}
          </p>
          <footer className="blockquote-footer">Rodrigo Xavier</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
