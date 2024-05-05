import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  experience,
  skills,
  getInTouch,
  proyects
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/skillsSection/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Experience from "./components/home/Experience.jsx";
import BackTop from "./components/home/BackToTop/BacktoTop.jsx";
import Proyects from "./components/home/Proyects";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        subtitle={`${mainBody.titleSub}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
       {experience.show && (
        <Experience
         experience={experience}
         resume={about.resume}
        />
      )}
      {
        proyects.show && (
          <Proyects proyects={proyects}/>
        )
      }
     
      
      
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename="/">
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
      <BackTop />
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
