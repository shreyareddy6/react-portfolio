import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Shreya Yerragudi,</span>
        <br /> Full Stack Developer
      </h1>
      <p>
        A software engineer with over 3 years of experience delivering web and
        enterprise applications, adept at building scalable and efficient
        solutions
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <Link to="/Contact">Connect with me</Link>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
