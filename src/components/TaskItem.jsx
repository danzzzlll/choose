import React from "react";

import "../App.css";


export const TaskItem = (props) => {
  const { item, index, onDone } = props;
  return (
    <li
      className = "task-item"
      style = {{backgroundColor : item.completed? "rgba(255, 255, 255, 0.5)" : 'rgba(255, 255, 255, 0.1)'}}
      //key       = {item.id}
    >
      <span>
        <span
          style = {{ fontWeight: "bold" }}
        >{index + 1}. </span>
        <span
          style = {{ fontWeight: item.completed ? "fontWeight":"24px",}}
        >
          {item.title}
        </span>
      </span>
      <input
        className = "done-item"
        type      = "checkbox"
        
        checked   = {item.completed}
        onChange  = {(event) => onDone(item) }
      />
    </li>
  )
}


