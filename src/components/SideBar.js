import React from "react";

const SideBar = () => {
  const projects = [
    { name: "school", color: "#FC6B97" },
    { name: "personal", color: "#65BCB7" },
    { name: "work", color: "#A45DE2" }
  ]

  return (
    <div className="side-bar">
      <ul className="nav">
        {projects.map((project, index) => (
          <li className="nav-item" key={index}>
            <span className="nav-icon" style={{ background: project.color }}>
              {project.name.slice(0, 2).toLocaleUpperCase()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar;
