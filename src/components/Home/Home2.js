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
              A BRIEF <span className="purple"> INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
              Programming is my passion — I love solving logic problems
              and making systems more efficient, robust, and optimized :)
              <br />
              <br />I’m fluent in the classics like
              <i>
                <b className="purple"> C/C++, Javascript, and Python. 🦊</b>
              </i>
              <br />
              <br />
              My main field of interest is{" "}
              <b className="purple">Artificial Intelligence</b> followed by{" "}
              <b className="purple">Embedded Systems</b>,
              but I also love Web Development.
              <br />
              <br />
              From time to time, I enjoy developing animations with{" "}
              <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  modern JavaScript libraries and frameworks{" "}
                </b>
              </i>
              like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              {" "} and deploying them to GitHub Pages.
              <br />
              <br />
              I love creating, playing, and building little{" "}
              <b className="purple">electronic projects</b> using
              <i>
                <b className="purple"> Arduino and Raspberry Pi</b>
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
            <h1>MY PROFESSIONAL NETWORKS</h1>
            <p>
              Feel free to <span className="purple">connect with me</span>
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