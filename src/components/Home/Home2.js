import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg"; // Got From https://svgavatars.com/
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UMA BREVE <span className="purple"> INTRODUÇÃO </span>
            </h1>
            <p className="home-about-body">
              Programação é minha paixão, adoro resolver problemas de lógica
              e deixar os sitemas mais eficientes, robustos e otimizados :)
              <br />
              <br />Sou fluente nos clássicos como
              <i>
                <b className="purple"> C/C++, Javascript e Python. 🦊</b>
              </i>
              <br />
              <br />
              Meu campo de interesse é {" "}
              <b className="purple">Inteligência Artificial</b> seguido de {" "}
              <b className="purple">Embarcados</b>,
              mas também adoro Desenvolvimento Web.
              <br />
              <br />
              De vez em quando, gosto de desenvolver animações com {" "}
              <b className="purple">Node.js</b> e
              <i>
                <b className="purple">
                  {" "}
                  Bibliotecas e Frameworks Modernos Javascript
                  {" "}
                </b>
              </i>
              como
              <i>
                <b className="purple"> React.js e Next.js</b>
              </i>
              {" "}
              E subir no Github-pages
              <br />
              <br />
              Adoro criar e brincar e desenvolver projetinhos {" "}
              <b className="purple">Eletrônicos</b> com
              <i>
                <b className="purple">
                  {" "}
                  Arduino e Raspberry Pi
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>MINHAS REDES PROFISSIONAIS</h1>
            <p>
              Sinta-se livre para me <span className="purple">seguir</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rodrigo-xavier"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rodrigo-xavier/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
