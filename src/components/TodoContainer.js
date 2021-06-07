import React from 'react'
import { useSelector } from 'react-redux'
import AddTask from './AddTask'
import TasksList from './TasksList'

const TodoContainer = () => {
  const { tasks } = useSelector(state => state.tasks)
  const { currentProject } = useSelector(state => state.projects)

  const projectTasks = tasks.filter(task => task.projectId === currentProject.id)
  const todo = projectTasks.filter(task => task.done === false)
  const completed = projectTasks.filter(task => task.done === true)

  return (
    <div className="todo-containter">
      <div className="todo-content">
        <h2>{currentProject.name}</h2>
        <AddTask />
        <TasksList listTitle="Todo" taskslist={todo} />
        <TasksList listTitle="Completed" taskslist={completed} />
      </div>
    </div>
  )
}

export default TodoContainer