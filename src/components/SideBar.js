import React from 'react'

const SideBar = () => {
  const categories = [
    {name: "school", color: "#FC6B97"},
    {name: "personal", color: "#65BCB7"},
    {name: "work", color: "#A45DE2"},
  ]

  return (
    <div className="side-bar">
      <ul className="nav">
        {categories.map(category =>           
        <li className="nav-item" style={{background: category.color}}>
          {category.name.slice(0, 2).toLocaleUpperCase()}
        </li>
        )}
      </ul>
    </div>
  )
}

export default SideBar