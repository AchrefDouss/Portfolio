import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import inventory from "../../Assets/Projects/inventory.png";
import educSOS from "../../Assets/Projects/educSOS.png";
import microservices from "../../Assets/Projects/microservices-logical.png";
import eshop from "../../Assets/Projects/dousShop.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={educSOS}
              isBlog={false}
              title="EducSOS"
              description="This platform was designed for the benefit of the children of Akouda village, to enable them to study and play entertaining and educational games in their free time ."
              ghLink="https://github.com/AchrefDouss/pscpolytech.github.io"
              demoLink="https://pscpolytech.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eshop}
              isBlog={false}
              title="Eshop-Android"
              description="A mobile Eshop App using android Studio ."
              ghLink="https://github.com/AchrefDouss/Eshop_Android"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Inventory-Management"
              description="The Inventory-Management app developed using Android Studio is a powerful and user-friendly tool designed to help businesses efficiently track and manage their inventory. With its intuitive interface and robust features, the app provides a seamless experience for inventory control."
              ghLink="https://github.com/AchrefDouss/Inventory-Management"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microservices}
              isBlog={false}
              title="Microservices with gRPC, GraphQL and REST"
              description="The Microservices architecture with gRPC, GraphQL, and REST, implemented using Node.js, protobuf, GraphQL, and gRPC, offers a flexible and efficient solution for building distributed systems."
              ghLink="https://github.com/AchrefDouss/ProjectSoa"
              demoLink="https://tasty-knickers-deer.cyclic.app/"
            />
          </Col>

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
