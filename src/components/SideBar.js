import React from "react";
import AddProject from "./AddProject";
import Projects from "./Projects";

const SideBar = () => {
  return (
    <div className="side-bar">
      <Projects />
      <AddProject />
    </div>
  )
}

export default SideBar;