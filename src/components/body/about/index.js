import React from "react";
import "./about.css";
import { Typewriter } from "react-simple-typewriter";
import SocialContact from "../../common/social-contact";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <h2>
            Hello There 👋, I am <span className="info-name">AKASH KUMAR </span>
          </h2>
          <h3>
            I'm a{" "}
            <Typewriter
              words={[
                "Developer 🧑‍💻",
                "Designer 💅",
                "Open Source Contributer  ✔️",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png").default}
            className="picture"
            alt="coding"
          />
        </div>
      </div>

      <div className="about-bottom">
        <SocialContact />
      </div>
    </div>
  );
}

export default About;
