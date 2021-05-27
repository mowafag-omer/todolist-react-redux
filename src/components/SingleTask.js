import React from 'react'
import { useDispatch } from "react-redux";
import { toggleTask } from "../store/actions";

const SingleTask = ({id, task, done}) => {
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleTask({
      id,
      done: !done,
    }))
  }

  return (
    <div onClick={handleToggle} className="single-task">
      <span className={`icon ${done && 'icon-fill'}`}></span>
      <span className={`task ${!done && 'completed'}`}>{task}</span>
    </div>
  )
}

export default SingleTask
