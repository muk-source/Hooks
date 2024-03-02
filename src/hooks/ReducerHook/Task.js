import React from "react";

export default function Task({ task, onDelete }) {
  return (
    <div>
      <h2>{task.text}</h2>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}
