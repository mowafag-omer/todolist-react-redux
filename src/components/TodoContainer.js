import React from 'react'
import TaskInput from './TaskInput'
import TasksList from './TasksList'

const TodoContainer = () => {
  const list = [
    { task: 'The first task of todo list app', done: 0 },
    { task: 'The first task of todo list app', done: 0 },
    { task: 'The first task of todo list app', done: 0 },
    { task: 'The first task of todo list app', done: 1 },
    { task: 'The first task of todo list app', done: 1 },
    { task: 'The first task of todo list app', done: 1 }
  ]

  const todo = list.filter(task => task.done === 0)
  const completed = list.filter(task => task.done === 1)

  return (
    <div className="todo-containter">
      <div className="todo-content">
        <h2>School</h2>
        <TaskInput />
        <TasksList listTitle="Todo" taskslist={todo} />
        <TasksList listTitle="Completed" taskslist={completed} />
      </div>
    </div>
  )
}

export default TodoContainer