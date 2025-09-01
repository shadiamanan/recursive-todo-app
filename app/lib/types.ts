export type TodoItem = {
  id: string;           // unique identifier
  text: string;         // task description
  completed: boolean;   // is task done?
  subTasks: TodoItem[]; // nested tasks
};