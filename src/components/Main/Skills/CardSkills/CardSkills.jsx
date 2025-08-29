import React from "react";
import "../Skills.css";

export default function CardSkills({ title, skills }) {
  return (
    <div className="skill-card">
      <h2 className="skill-title">{title}</h2>
      <div className="skill-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-icon"
            />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}