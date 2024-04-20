import React from "react";
import "./softwareskills.css";
import { Jumbotron } from "../migration";
import { Container } from "react-bootstrap";
import { skills } from '../../../editable-stuff/config'


const Skills = React.forwardRef(({ heading }, ref) => {
 
  return (
    <Jumbotron  fluid className="bg-white m-0" id="skills">
      <Container className="p-2 ">
        <h2 className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <div className="software-skills-main-div">
        <ul className="dev-icons">
        {skills.hardSkills.map((skills, i) =>{
          return(
            <li
            key={i}
            className="software-skill-inline"
            name={skills.skillName}>
              <i className={skills.icon}>{skills.icon}</i>
              <p>{skills.skillName}</p>
            </li>
          )
        })}
        </ul>
      </div>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
