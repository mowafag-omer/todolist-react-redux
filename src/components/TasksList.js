import React from 'react'
import SingleTask from './SingleTask'

const TasksList = ({listTitle, taskslist}) => {
  return (
    <div>
      <h5 style={{color:'white'}}>{listTitle} - {taskslist.length}</h5>
      <div className="tasks-list">
        {taskslist.map(task => (
          <SingleTask {...task} />
        ))}
      </div>
    </div>
  )
}

export default TasksList