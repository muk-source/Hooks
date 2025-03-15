import { useState } from "react";
import Checkbox from "./hooks/statehook/Checkbox";
import Counter from "./hooks/statehook/Counter";
import Form from "./hooks/statehook/Form";
import TextField from "./hooks/statehook/TextField";
import Todos from "./hooks/statehook/Todos";
import Count from "./hooks/statehook/CountCheck/Count";
import PointerMove from "./hooks/EffectHook/PointerMove";
import ApiCall from "./hooks/EffectHook/ApiCall";
import Focus from "./hooks/RefHook/Focus";
import Wrapper from "./hooks/ContextHook/Wrapper";
import TaskApp from "./hooks/ReducerHook/TaskApp";
import TodoContainer from "./hooks/ReactMemo/TodoContainer";
import Memoization from "./hooks/MemoHook/Memoization";
import TodosContainer from "./hooks/CallbackHook/TodosContainer";

function App() {
  // const [version, setVersion] = useState(0);
  // const handleClick = () => {
  //   setVersion(version + 1);
  // };
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      {/* this section is for reset using key */}
      {/* <button onClick={handleClick}>Reset</button>
      <Form key={version} /> */}
      {/* <Todos /> */}
      {/* this section is of setting the state from prev state */}
      {/* <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <Count count={count} /> */}

      {/* -------------------------------------- */}
      {/* useEffect Hook */}
      {/* <PointerMove /> */}
      {/* <ApiCall /> */}

      {/* ------------------------------------------ */}
      {/* useRef Hook */}
      {/* <Focus /> */}
      {/* 
      ------------------------------------------ */}

      {/* ContextHook */}
      {/* <Wrapper /> */}

      {/* --------------------------------------------- */}
      {/* Reducer Hook */}
      {/* <TaskApp /> */}

      {/* --------------------------------------------- */}
      {/* {React.Memo} */}
      {/* <TodoContainer /> */}

      {/* --------------------------------------------- */}
      {/* {Memo Hook} */}
      {/* <Memoization /> */}

      {/* --------------------------------------------- */}
      {/* {Callback Hook} */}
      <TodosContainer />
    </>
  );
}

export default App;
