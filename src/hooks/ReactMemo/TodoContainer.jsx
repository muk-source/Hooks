import React, { useState } from "react";
import Todo from "./Todo";

function TodoContainer() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo1,todo2"]);

  const handleClick = () => {
    setCount((c) => c + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>Count - {count}</p>
      <Todo todos={todos} />
    </div>
  );
}

export default TodoContainer;
