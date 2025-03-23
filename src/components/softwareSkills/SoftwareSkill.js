import React from "react";
import "./SoftwareSkill.scss";

export default function SoftwareSkill({ filteredSkills = [] }) {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {filteredSkills.map((skill, i) => (
          <li key={i} className="software-skill-inline" name={skill.skillName}>
            <i className={skill.fontAwesomeClassname}></i>
            <p>{skill.skillName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}