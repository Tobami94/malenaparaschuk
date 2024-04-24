import React from "react";
import ProyectsCards from "./ProyectsCards";
import { Jumbotron } from "./migration";
import { Container, Row } from "react-bootstrap";

const Experience = ({ proyects }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron id="projects" className="bg-white">
          <h2 className="display-4 mb-5 text-center">{proyects.heading}</h2>
          <Row>
            {proyects.data.map((data, index) => {
              return <ProyectsCards key={index} data={data} />;
            })}
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
};

export default Experience;
