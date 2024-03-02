import React, { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { taskReducer } from "./TaskReducer";

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const handleAddTask = (text) => {
    dispatch({
      type: "add",
      id: nextId++,
      text: text,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "delete",
      id: taskId,
    });
  };
  return (
    <div>
      <h1>Task App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum" },
  { id: 1, text: "Watch a puppet show" },
  { id: 2, text: "Lennon Wall pic" },
];
