import React from "react";
import SingleTask from "./SingleTask";

const TasksList = ({ listTitle, taskslist }) => {
  return (
    <div>
      <h5 style={{ color: "white" }}>
        {listTitle} - {taskslist.length}
      </h5>
      <div className="tasks-list">
        {!!taskslist.length ? (
          taskslist.map((task) => <SingleTask key={task.id} {...task} />)
        ) : (
          <p style={{ color: "white" }}>There is no {listTitle} tasks ...! </p>
        )}
      </div>
    </div>
  )
}

export default TasksList;
