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
          Meus <strong className="purple">Trabalhos </strong>Mais Recentes
        </h1>
        <p style={{ color: "white" }}>
          Veja aqui alguns projetos que tenho trabalhado recentemente
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vendaInFocus}
              isBlog={false}
              title="Venda In Focus"
              description="Web Scraping para extração e análise de dados em marketplaces, gerando insights de produtos. Aplicando modelagem estatística, normalização, funções de ativação, rotação de proxies e limpeza de dados."
              demoLink="https://www.appsheet.com/start/de3fc0d6-eb1e-4b79-9080-fec81e78bdd5?platform=desktop"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gestor}
              isBlog={false}
              title="Gestor"
              description="Sistema para gestão de equipamentos e agendamentos cirúrgicos. Com importação automática de dados de planilhas"
              demoLink="https://gestor-cirurgico.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pincelia}
              isBlog={false}
              title="Pincelia"
              description="Plataforma de prospecção de clientes para edição de imagens com Inteligência Artificial"
              demoLink="https://rodrigo-xavier.github.io/pincelia/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={about}
              isBlog={false}
              title="About"
              description="Sistema para criação de currículos em PDF e exibição de perfil profissiona"
              ghLink="https://github.com/rodrigo-xavier/old-about"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
