import React, { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  const handleClick = () => {
    setText("");
    onAddTask(text);
  };
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
