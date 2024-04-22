import React, { useState } from "react";
import { Jumbotron } from "./migration";
import { Container, Row } from "react-bootstrap";
import ExperienceCard from "./ExperiencesCard";

const Experience = ({ experience, resume }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">{experience.heading}</h2>
          <Row>
            {experience.data.map((data, index) => {
              return <ExperienceCard key={index} data={data} />;
            })}
          </Row>

          <div className="d-flex justify-content-center">
            <a
              className={`d-inline-flex align-items-center p-1 mx-3 mb-1 ${
                isHovered ? "hovered" : ""
              }`}
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
              <span className="resume me-1">Ver perfil completo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="me-1"
                aria-hidden="true"
                width="16"
                height="16">
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </Jumbotron>
      </Container>
    </section>
  );
};

export default Experience;
