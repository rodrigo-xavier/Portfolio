import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import logo from "../Assets/logo.png";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  // AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Sobre Mim
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Meus Projetos
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Currículo
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://doravantec.medium.com/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blog
              </Nav.Link>
            </Nav.Item>

            {/* Botão para trocar de idioma */}
            <Nav.Item className="fork-btn">
              <select
                onChange={(e) => {
                  const selectedLang = e.target.value;
                  const base = "/Portfolio";
                  const url = selectedLang === "pt" ? `${base}/` : `${base}/${selectedLang}/`;
                  window.location.href = url;
                }}
                className="language-select"
                style={{
                  maxWidth: '150px',
                  marginRight: '10px',
                  padding: '4px 8px',
                  fontSize: '0.9rem',
                }}
                defaultValue={(() => {
                  const path = window.location.pathname.split("/")[2];
                  return path || "pt";
                })()}
              >
                <option value="pt">🇧🇷 Português</option>
                <option value="en">🇺🇸 English</option>
                {/* <option value="fr">🇫🇷 Français</option>
                <option value="es">🇪🇸 Español</option> */}
              </select>
            </Nav.Item>

            {/*
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/rodrigo-xavier/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
            */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
