import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { v1 as uuid } from "uuid";
import { addProject } from "../store/actions/projectActions";


const AddProject = () => {
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({name: '', color: ''})
  const dispatch = useDispatch();

  const colors = [
    "#8FBC8F",
    "#FC6B97",
    "#E9967A",
    "#A45DE2",
  ]

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(addProject({
      id: uuid(),
      name: form.name,
      color: form.color
    }))
    
    setForm({name: '', color: ''})
    setShowForm(false)
  } 

  return (
    <div className="add-project">
      <span></span>
      <button className="show-btn" onClick={() => setShowForm(!showForm)}>
        +
      </button>

      {showForm && 
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={form.name}
            onChange={(e) => setForm(form => ({...form, name: e.target.value}))} 
            placeholder="Add the project name..." 
          />

          <fieldset className="colors">
            <legend>Pick a color</legend>
            {colors.map(color => (
              <label key={color} style={{background:color}}>
                <input
                  type="radio"
                  id="color"
                  className="custom-radio"
                  name="color"
                  value={color}
                  onChange={(e) => setForm(form => ({...form, color: e.target.value}))}
                />
                <span className="checkmark"></span>
              </label>
            ))}
          </fieldset>

          <button className="add-btn">Add</button>
        </form>
      }
    </div>
  )
}

export default AddProject