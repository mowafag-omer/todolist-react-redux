import { createStore, combineReducers } from 'redux'
import { taskReducer } from './reducers/taskReducer'
import { projectReducer } from './reducers/projectReducer'

let rootReducer = combineReducers({
  projects: projectReducer,
  tasks: taskReducer
})

export let store = createStore(rootReducer)