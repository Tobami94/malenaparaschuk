import React from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";
import { Jumbotron } from "./migration";
import { mainBody } from "../../editable-stuff/config";

const MainBody = React.forwardRef(({ gradient, title, subtitle, message }, ref) => {
  return (
    <Jumbotron
      fluid
      id="home"
      style={{
        background: `linear-gradient(136deg,${gradient})`,
        backgroundSize: "1200% 1200%",
      }}

      className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0">
    
      <Container className="text-center">
        <h1 ref={ref} className="display-1">
          {title}
        </h1>
        <h3 ref={ref} >
          {subtitle}
        </h3>
        <Typist>
          <div className="lead typist">{message}</div>
        </Typist>
        <div className="p-5">
          {mainBody.icons.map((ico, i) => {
            return (
              <a
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                href={ico.url}>
                <i className={`fab ${ico.icon} fa-3x socialicons`}>
                  {ico.icon}
                </i>
              </a>
            );
          })}
        </div>
        <a
          className="btn btn-outline-light btn-lg "
          href="#aboutme"
          role="button"
          aria-label="Learn more about me">
          Sobre mi
        </a>
      </Container>
    </Jumbotron>
  );
});

export default MainBody;
