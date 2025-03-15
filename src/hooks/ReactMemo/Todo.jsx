import React, { memo } from "react";

function Todo({ todos }) {
  console.log("hello");
  return (
    <>
      <h2>Todos</h2>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </>
  );
}

export default memo(Todo);
// by Using memo , we can see that console.log("hello") is not being printed on clicking the button.

// Hence React.memo stops the component to re-render if its props have not changed
