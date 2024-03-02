export const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
        },
      ];
    }
    case "delete": {
      return tasks.filter((t) => t.id !== action.id);
    }
  }
};
