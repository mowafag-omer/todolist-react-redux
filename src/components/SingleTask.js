import React from 'react'

const SingleTask = ({task, done}) => {
  return (
    <div className="single-task">
      <span className={`icon ${done && 'icon-fill'}`}></span>
      <span className={`task ${done && 'completed'}`}>{task}</span>
    </div>
  )
}

export default SingleTask
