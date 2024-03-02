import React, { createContext, useState } from "react";
import Hello from "./Hello";
export const ThemeContext = createContext("red");
export default function Wrapper() {
  const [theme, setTheme] = useState("red");
  const handleClick = () => {
    setTheme(theme === "red" ? "blue" : "red");
  };
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Hello />
      </ThemeContext.Provider>
      <button onClick={handleClick}>Toggle</button>
    </>
  );
}
