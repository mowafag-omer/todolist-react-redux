import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { changeProject } from '../store/actions/projectActions'


const Projects = () => {
  const dispatch = useDispatch();
  const {projects, currentProject} = useSelector(state => state.projects)

  return (
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
  )
}

export default Projects
