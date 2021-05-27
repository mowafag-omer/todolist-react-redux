import { CHANGE_PROJECT, ADD_TASK, TOGGLE_TASK, DELETE_TASK, UPDATE_TASK } from './types'

export function changeProject(project) {
  return {
    type: CHANGE_PROJECT,
    payload: project
  }
}

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task
  }
}

export function toggleTask(task) {
  return {
    type: TOGGLE_TASK,
    payload: task
  }
}

export function deleteTask(taskId) {
  return {
    type: DELETE_TASK,
    payload: taskId
  }
}

export function updateTask(task) {
  return {
    type: UPDATE_TASK,
    payload: task
  }
}
