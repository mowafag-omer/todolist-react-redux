import { CHANGE_PROJECT, ADD_PROJECT } from '../types'

export function changeProject(project) {
  return {
    type: CHANGE_PROJECT,
    payload: project
  }
}

export function addProject(project) {
  return {
    type: ADD_PROJECT,
    payload: project
  }
}