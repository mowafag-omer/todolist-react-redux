import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../store/actions";

const UpdateTask = ({id, task, setShowUpdate}) => {
  const [updatedTask, setUpdatedTask] = useState(task)
  const dispatch = useDispatch();
  const color = useSelector(state => state.currentProject.color)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    dispatch(updateTask({
      id,
      task: updatedTask
    }))

    setShowUpdate(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
          type="text"
          placeholder="update the task..."
          maxLength="35"
          required
        />
        <button type="submit" style={{background: color}}>Update</button>
      </form>
    </>
  )
}

export default UpdateTask
