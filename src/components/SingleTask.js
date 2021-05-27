import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTask, deleteTask } from "../store/actions";
import UpdateTask from "./UpdateTask";

const SingleTask = ({id, task, done}) => {
  const [showUpdate, setShowUpdate] = useState(false)
  const dispatch = useDispatch()
  const color = useSelector(state => state.currentProject.color)

  const handleToggle = () => dispatch(toggleTask({id, done: !done}))
  const handleDelete = () => dispatch(deleteTask(id))

  return (
    <div className="single-task">
      <span 
        className={`icon ${done && 'icon-fill'}`} 
        style={done ? {background: color, borderColor: color} : {borderColor: color}}
      ></span>
      

      {showUpdate ? (
        <UpdateTask id={id} task={task} setShowUpdate={setShowUpdate} />
      ) : (
        <>
          <span
            onClick={handleToggle}
            className={`task ${done && "completed"}`}
          >
            {task}
          </span>

          <button onClick={() => setShowUpdate(true)}>edit</button>
          <button onClick={handleDelete}>delete</button>
        </>
      )}
    </div>
  )
}

export default SingleTask
