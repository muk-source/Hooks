import React, { useContext } from "react";
import { ThemeContext } from "./Wrapper";

export default function Hello() {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{ border: `10px solid ${theme}`, padding: "20px", margin: "20px" }}
    >
      Hello
    </div>
  );
}
