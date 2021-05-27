import React from 'react'

const TaskInput = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <input type="text" name="task" placeholder="Add a task..." required/>
          <button type="submit">+</button>
        </div>
      </form>
    </div>
  )
}

export default TaskInput