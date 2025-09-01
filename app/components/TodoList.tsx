import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // for unique IDs

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
  subTasks: TodoItem[];
};

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTask, setNewTask] = useState("");

  // Add a new task at root level
  const addTask = () => {
    if (!newTask.trim()) return;
    setTodos([
      ...todos,
      { id: uuidv4(), text: newTask, completed: false, subTasks: [] },
    ]);
    setNewTask("");
  };

  // Toggle complete status
  const toggleComplete = (id: string, items: TodoItem[] = todos): TodoItem[] => {
    const updated = items.map((t) =>
      t.id === id
        ? { ...t, completed: !t.completed }
        : { ...t, subTasks: toggleComplete(id, t.subTasks) }
    );
    setTodos(updated);
    return updated;
  };

  // Delete task
  const deleteTask = (id: string, items: TodoItem[] = todos): TodoItem[] => {
    const updated = items.filter((t) => t.id !== id).map((t) => ({
      ...t,
      subTasks: deleteTask(id, t.subTasks),
    }));
    setTodos(updated);
    return updated;
  };

  // Add sub-task
  const addSubTask = (parentId: string, text: string, items: TodoItem[] = todos): TodoItem[] => {
    const updated = items.map((t) =>
      t.id === parentId
        ? {
            ...t,
            subTasks: [...t.subTasks, { id: uuidv4(), text, completed: false, subTasks: [] }],
          }
        : { ...t, subTasks: addSubTask(parentId, text, t.subTasks) }
    );
    setTodos(updated);
    return updated;
  };

  // Recursive render
  const renderTasks = (items: TodoItem[]) =>
    items.map((task) => (
      <li key={task.id}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        {task.text}
        <button onClick={() => deleteTask(task.id)}>Delete</button>
        <AddSubTaskForm parentId={task.id} onAdd={addSubTask} />
        {task.subTasks.length > 0 && <ul>{renderTasks(task.subTasks)}</ul>}
      </li>
    ));

  return (
    <div style={{ padding: "20px" }}>
      <h2>Recursive To-Do List</h2>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={addTask}>Add Task</button>
      <ul>{renderTasks(todos)}</ul>
    </div>
  );
}

// Component for adding sub-tasks
function AddSubTaskForm({
  parentId,
  onAdd,
}: {
  parentId: string;
  onAdd: (parentId: string, text: string) => void;
}) {
  const [text, setText] = useState("");
  return (
    <div style={{ marginLeft: "20px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Sub-task..."
      />
      <button
        onClick={() => {
          if (!text.trim()) return;
          onAdd(parentId, text);
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
}