import React, { useCallback, useState } from "react";
import Todo from "./Todo";

function TodosContainer() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo1,todo2"]);
  const handleClick = () => {
    setCount((c) => c + 1);
  };

  //   const addTodo = () => {
  //     setTodos((t) => [...t, "new Todo Added"]);
  //   };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo Added"]);
  }, [todos]);
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>Count - {count}</p>
      <Todo todos={todos} addTodo={addTodo} />
      {/* When we pass addTodo function as prop , then again our Todo componenent starts to re render
      even if Todo prop has not changed . this happened becuase when this component re render
      then addTodo function is created again which means it become new and Hence
      addTodo passed as prop change whcih led to re render of Todo component */}
    </div>
  );
}

export default TodosContainer;
