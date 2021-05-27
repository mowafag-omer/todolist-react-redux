import React from "react";
import { useSelector } from 'react-redux'

const SideBar = () => {
  const projects = useSelector(state => state.projects)

  return (
    <div className="side-bar">
      <ul className="nav">
        {projects.map(project => (
          <li className="nav-item" key={project.id}>
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
