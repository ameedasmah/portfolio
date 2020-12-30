import React, { useState, useEffect } from "react";
import { SvgIcon, Typography } from "@material-ui/core";
import "./Skill.css";
import { Element } from "react-scroll";

import skillList from "../../utils/skill-list";

export default function Skill({ skill }) {

  const [skills, setSkills] = useState([])
  useEffect(() => {
    const reqOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
    fetch('http://127.0.0.1:8000/skill/', reqOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setSkills(data)
      })
  }, [])
  console.log('aaa', skills)
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase",
          fontFamily: '"Bungee", cursive'
        }}
      >
        <Element name="skill">Skills</Element>
      </Typography>
      <div className="skill-container">
        {skills.map((skill, i) => (
          <div className="skill-img" key={i}>
            <SvgIcon
              titleAccess={skill.name}>
            </SvgIcon>
            <img src={skill.iconURL}
              style={{ width: "auto", height: "100%" }}
              className="svg-icon"
              viewBox="0 0 24 24"
              color="primary" />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
