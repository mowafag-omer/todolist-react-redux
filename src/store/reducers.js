import { CHANGE_PROJECT, ADD_TASK, TOGGLE_TASK, DELETE_TASK, UPDATE_TASK } from "./types";

let initialState = {
  projects: [
    {id: 1, name: "School", color: "#FC6B97"},
    {id: 2, name: "Personal", color: "#65BCB7"},
    {id: 3, name: "Work", color: "#A45DE2"}
  ],
  currentProject: {id: 1, name: "school", color: "#FC6B97"},
  tasks: [
    {id:'1', task: 'The first task of todo list app 1', done: false, projectId: 1},
    {id:'2', task: 'The first task of todo list app 2', done: false, projectId: 1},
    {id:'3', task: 'The first task of todo list app 3', done: true, projectId: 1},
    {id:'4', task: 'The first task of todo list app 4', done: true, projectId: 1}  
  ]
}

export let reducer = (state = initialState, action) => {
  let updatedTasks, index
  switch (action.type) {
    case CHANGE_PROJECT:
      return {
        ...state,
        currentProject: action.payload
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case TOGGLE_TASK:
      index = state.tasks.findIndex(t => t.id === action.payload.id)
      updatedTasks = [...state.tasks]
      updatedTasks[index].done = action.payload.done
      return {
        ...state,
        tasks: updatedTasks
      } 
    case DELETE_TASK:
      updatedTasks = [...state.tasks]
      updatedTasks = updatedTasks.filter(task => task.id !== action.payload)
      return {
        ...state,
        tasks: updatedTasks
      }
    case UPDATE_TASK:
      index = state.tasks.findIndex(t => t.id === action.payload.id)
      updatedTasks = [...state.tasks]
      updatedTasks[index].task = action.payload.task
      return {
        ...state,
        tasks: updatedTasks
      }
    default:
      return state
  }
};
