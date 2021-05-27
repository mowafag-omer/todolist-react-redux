import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProject } from '../store/actions'

const SideBar = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects)
  const currentProject = useSelector(state => state.currentProject)

  return (
    <div className="side-bar">
      <ul className="nav">
        {projects.map(project => (
          <li 
            key={project.id}
            onClick={() => dispatch(changeProject(project))}
            className={`nav-item ${currentProject.id === project.id && 'active' }`}
          >
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
