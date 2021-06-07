import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v1 as uuid } from "uuid";
import { addTask } from "../store/actions/taskActions";

const AddTask = () => {
  const [task, setTask] = useState("")
  const dispatch = useDispatch();
  const project = useSelector(state => state.projects.currentProject)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(addTask({
      id: uuid(),
      task,
      done: false,
      projectId: project.id
    }))

    setTask('')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="add-form-group">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a task..."
            maxLength="35"
            required
          />
          <button type="submit" style={{background: project.color}}>+</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
