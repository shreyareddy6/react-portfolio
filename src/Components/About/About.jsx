import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-title">
          <h1>About me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={profile_img} alt="" />
          </div>
          <div className="about-right">
            <div className="about-paragraph">
              <p>
                I specialize in building responsive web applications using
                JavaScript, React, and Node.js, leveraging dynamic, modern
                technologies to solve real-world problems
              </p>
              <p>
                My passion for software development is not only reflected in my
                extensive experience but also in the enthusiasm and dedication I
                bring to each project.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>Node.js</p>
                <hr style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>2+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>2+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
