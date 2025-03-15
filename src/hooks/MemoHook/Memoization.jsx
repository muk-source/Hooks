import React, { useMemo, useState } from "react";

function Memoization() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  //   const calculation = expensiveCal(count);
  const calculation = useMemo(() => expensiveCal(count), [count]);

  // Because of above line now calculation is being done only when count changes.
  const handleTodo = () => {
    setTodos((t) => [...t, "New Todo Added"]);
  };

  const handleClick = () => {
    setCount((c) => c + 1);
  };
  return (
    <div>
      <button onClick={handleTodo}>Add todo</button>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}

      <button onClick={handleClick}>Increment Count</button>
      <p>Count - {count}</p>

      <h2>Expensive Calculation - {calculation}</h2>
    </div>
  );
}

export default Memoization;

const expensiveCal = (num) => {
  for (let i = 0; i < 1000000000; i++) {
    num = num + 1;
  }
  return num;
};
