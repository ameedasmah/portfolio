import React from "react";
import { Typography } from "@material-ui/core";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      >
        {/*  <Element name="about-me" id="about-me">
                About Me
            </Element> */}
      </Typography>
      <div className="name">
        <img src="https://media.discordapp.net/attachments/762721371809382421/793101111309500466/11334138_10204951267766836_8466014935568855448_o.jpg?width=473&height=473" alt="profile_photo" className="img" />
        <h1 style={{fontWeight:"lighter"}}>Ameed Asmah</h1>
        <div className="subtitle">
          <h3>I am a Full stack web developer.</h3>
          <p>
            Creating Beautiful things with quality and elegance! <br />
            Experienced in React and Python. My favourite technology is
            ReactJS
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
