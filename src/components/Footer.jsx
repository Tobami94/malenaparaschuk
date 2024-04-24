import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="enlacess"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Tobami94"
          aria-label="My GitHub">
          {" "}
          <span className="badge bg-dark">Malena Paraschuk</span>
        </a>
        <p></p>
      </Container>
    </footer>
  );
};

export default Footer;
