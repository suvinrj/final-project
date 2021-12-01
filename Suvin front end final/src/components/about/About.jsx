import React, { Component } from "react";
import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://github.com/suvinrj/final-project/blob/main/Screenshot%20(709).png?raw=true"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          My name is Suvin Raj Kollabathula, I am 20 years old, and I am from
          India
        </p>
        <p className="a-desc">
          I did my high school in Manado Independent School taking Sciences, and
          currently I am taking my Bachelor's in Computer Science in Universitas
          Klabat, Manado, Indonesia. My passion is in Photography, and my
          hobbies are Content-creation, music production, and Tech! I just got
          my Adobe Certified Professional Badge too
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Adobe Certified Professional 2021</h4>
            <p className="a-award-desc">
              I am a certified professional for Adobe Photoshop, so I can design
              whatever you want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
