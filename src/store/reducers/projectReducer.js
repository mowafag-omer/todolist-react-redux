import { CHANGE_PROJECT, ADD_PROJECT } from "../types";

let initialState = {
  projects: [
    {id: 1, name: "School", color: "#FC6B97"},
    {id: 2, name: "Personal", color: "#65BCB7"},
    {id: 3, name: "Work", color: "#A45DE2"},
    // {id: 4, name: "Work", color: "#A45DE2"},
    // {id: 5, name: "Work", color: "#A45DE2"},
    // {id: 6, name: "Work", color: "#A45DE2"},
    // {id: 7, name: "Work", color: "red"},
    // {id: 8, name: "Work", color: "green"},
    // {id: 9, name: "Work", color: "green"},
    // {id: 10, name: "Work", color: "green"},
  ],
  currentProject: {id: 1, name: "school", color: "#FC6B97"}
}

export let projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROJECT:
      return {
        ...state,
        currentProject: action.payload
      }
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      }  
    default:
      return state
  }
};
