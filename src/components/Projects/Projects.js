import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import about from "../../Assets/Projects/about.png";
import vendaInFocus from "../../Assets/Projects/vendaInFocus.png";
import gestor from "../../Assets/Projects/gestor.png";
import pincelia from "../../Assets/Projects/pincelia.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Most Recent </strong>Works
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I’ve been working on recently
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vendaInFocus}
              isBlog={false}
              title="Venda In Focus"
              description="Web scraping for extracting and analyzing data from marketplaces, generating product insights. Applying statistical modeling, normalization, activation functions, proxy rotation, and data cleaning."
              demoLink="https://www.appsheet.com/start/de3fc0d6-eb1e-4b79-9080-fec81e78bdd5?platform=desktop"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gestor}
              isBlog={false}
              title="Gestor"
              description="System for managing equipment and surgical scheduling, with automatic spreadsheet data import."
              demoLink="https://gestor-cirurgico.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pincelia}
              isBlog={false}
              title="Pincelia"
              description="Client prospecting platform for AI-powered image editing."
              demoLink="https://rodrigo-xavier.github.io/pincelia/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={about}
              isBlog={false}
              title="About"
              description="System for creating PDF resumes and showcasing professional profiles."
              ghLink="https://github.com/rodrigo-xavier/old-about"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
