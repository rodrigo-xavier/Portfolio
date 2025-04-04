import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Rodrigo M. Xavier</span>
            {" "}from <span className="purple">Distrito Federal, Brazil.</span>
            <br />
            I’m currently finishing my degree in Computer Engineering at UnB.
            <br />
            <br />
            Besides coding, here are some of my hobbies:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
            <li className="about-activity">
              <ImPointRight /> Recently trying embroidery
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be excellent to each other!"
          </p>
          <footer className="blockquote-footer">Rodrigo Xavier</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
