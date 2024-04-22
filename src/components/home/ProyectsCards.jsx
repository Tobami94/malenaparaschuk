import React from "react";

import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ProyectsCard = ({ data }) => {
  return (
    <Col lg="6">
      <Card className="cardProject shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <div className="d-grid gap-3 d-md-inline-flex">
            <div key="container-image">
              <img
                className="image-company rounded border border-secondary border-3 border-0 border-3 border-3 border-3 border-3 border-3 transition group-hover:border-secondary border-10 border-30 sm-order-1 sm-col-span-2 sm-translate-y-1"
                src={data.companylogo}
                alt=""
              />
            </div>
            <div key="container-data">
              <Card.Title as="h5">{data.role || <Skeleton />} </Card.Title>
              <small className="text-muted">{data.date}</small>
              <Card.Text>
                {!data.resumen ? "" : data.resumen || <Skeleton count={3} />}{" "}
              </Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProyectsCard;
