import React, { useState } from "react";

import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ProyectsCard = ({ data }) => {
  const [borderColor, setBorderColor] = useState("#8f97a0");
  const [isHoveredP, setIsHoveredP] = useState(false);

  const handleMouseEnter = () => {
    setBorderColor("#ff4f93");
  };

  const handleMouseLeave = () => {
    setBorderColor("#8f97a0");
  };

  return (
    <Col lg="6">
      <a
        className={`d-flex align-items-center p-1 mx-1 mb-1 rounded-3
      ${isHoveredP ? "hovered" : ""}`}
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHoveredP(true)}
        onMouseLeave={() => setIsHoveredP(false)}>
        <Card className="cardProject p-3 mb-5 bg-white rounded">
          <Card.Body>
            <div
              className="titleProject d-grid gap-3 d-md-inline-flex"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <div className="border-secondary">
                <img
                  className="rounded-3"
                  width="200"
                  height="140"
                  alt="imgproject"
                  style={{ border: `3px solid ${borderColor}` }}
                  src={data.companylogo}
                />
              </div>
              <div>
                <Card.Title className=" h5">
                  {data.role || <Skeleton />}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 20"
                    fill="currentColor"
                    className="me-1"
                    aria-hidden="true"
                    width="18"
                    height="18">
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"></path>
                  </svg>
                </Card.Title>
                <Card.Text className="textProject">
                  {!data.resumen ? "" : data.resumen || <Skeleton count={3} />}{" "}
                </Card.Text>
              </div>
            </div>
            <div className="button-tools d-grid gap-2 d-md-block">
              {data.tools?.map((t) => {
                const key = t.tool ? t.tool : t.id;
                return (
                  <span
                    className="btnexp  p-1 mx-1 mb-1  rounded-3 border"
                    key={key}>
                    {t.tool}
                  </span>
                );
              })}
            </div>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
};

export default ProyectsCard;
