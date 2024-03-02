import React, { useState } from "react";

const createinitialTodos = () => {
  const initialTodos = [];
  for (let i = 0; i < 10; i++) {
    initialTodos.push({
      id: i,
      text: "todo" + (i + 1),
    });
  }
  return initialTodos;
};

export default function Todos() {
  const [todos, setTodos] = useState(createinitialTodos);
  const [text, setText] = useState("");

  const handleClick = () => {
    setText("");
    setTodos([
      ...todos,
      {
        id: todos.length,
        text: text,
      },
    ]);
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>Add</button>
      <div>
        <ul>
          {todos.map((todo) => (
            <li>{todo.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
