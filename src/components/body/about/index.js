import React from "react";
import "./about.css";
import { Typewriter } from "react-simple-typewriter";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <h1>Hello There 👋, I am Akash Kumar Sahoo</h1>
          <h2>
            I'm a{" "}
            <Typewriter
              words={["Developer 🧑‍💻", "Designer 💅", "Open Source  ✔️"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </div>
        <div className="about-photo"></div>
      </div>

      <div className="about-bottom">this is contacts</div>
    </div>
  );
}

export default About;
