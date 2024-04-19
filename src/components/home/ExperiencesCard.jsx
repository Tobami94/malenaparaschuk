import React from "react";

import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ExperienceCard = ({ data }) => {
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{data.role || <Skeleton />} </Card.Title>
          <small className="text-muted">{data.date}</small>
          <Card.Text>
            {!data.resumen ? "" : data.resumen || <Skeleton count={3} />}{" "}
          </Card.Text>
          <div className="button-tools d-grid gap-2 d-md-block">
            {data.tools?.map((t) => {
              const key = t.tool ? t.tool : t.id;
              return (
                <button
                  className="btn btn-outline-secondary mx-1 mb-1"
                  key={key}>
                  {t.tool}
                </button>
              );
            })}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
