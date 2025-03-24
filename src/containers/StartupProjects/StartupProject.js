import React, { useContext, useEffect, useState } from "react";
import "./StartupProjects.scss";
// Removed bigProjects import
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const { isDark } = useContext(StyleContext);
  const [projects, setProjects] = useState([]);

  const title = "Projects";
  const subtitle = "SOME PROJECTS I HAVE BUILT & CONTRIBUTED TO";

  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win.focus();
  }

  useEffect(() => {
    fetch("https://portfolio-api-backend-0544f6fc6e71.herokuapp.com/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  // if (!projects.length) return null;
  if (!projects.length) {
    return (
      <div className="main" id="projects">
        <h1 className="skills-heading">{title}</h1>
        <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
          {subtitle}
        </p>
        <p className="loading">Loading projects...</p>
      </div>
    );
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{title}</h1>
          <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
            {subtitle}
          </p>

          <div className="projects-container">
            {projects.map((project, i) => (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
              >
                {project.image && (
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="card-image"
                    />
                  </div>
                )}

                <div className="project-detail">
                  <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                    {project.projectName}
                  </h5>
                  <p className="project-author">
                  <strong>Author:</strong> {project.author}
                </p>

                  <div className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                    {Array.isArray(project.projectDesc) ? (
                      <ul>
                        {project.projectDesc.map((point, index) =>
                          point ? <li key={index}>{point}</li> : null
                        )}
                      </ul>
                    ) : (
                      <p>{project.projectDesc}</p>
                    )}
                  </div>

                  {project.techStack && (
                    <div className="project-tech-stack">
                      <ul className="dev-icons">
                        {project.techStack.map((tech, index) => (
                          <li key={index} className="software-skill-inline">
                            <i className={tech.fontAwesomeClassname}></i>
                            <p>{tech.skillName}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.footerLink && (
                    <div className="project-card-footer">
                      {project.footerLink.map((link, i) => (
                        <span
                          key={i}
                          className={isDark ? "dark-mode project-tag" : "project-tag"}
                          onClick={() => openUrlInNewTab(link.url)}
                        >
                          {link.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}