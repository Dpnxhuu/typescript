// TodoContext.tsx
"use client";
import { stringify } from "querystring";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoContextType = {
  todos: Todo[];
  task: string | undefined;
  editId: number | null;
  setTask: Dispatch<SetStateAction<string | undefined>>;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void; // Add this
  deleteTodo: (id: number) => void; // Add this
  editTodo: (id: number) => void;
  handleAddTask: () => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string | undefined>("");
  const [editId, setEditId] = useState<number | null>(null);
  const [update, setUpdate] = useState<Todo[] | null>(null);

  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const editTodo = (id: number) => {
    setTask(todos.find((todo) => todo.id === id)?.text);
    setEditId(id);
  };

  const handleAddTask = (): void => {
    if (!task) return;

    if (editId) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editId ? { ...todo, text: task } : todo,
        ),
      );
      setEditId(null);
    }else{
      addTodo(task);
    }
    setTask("");
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        task,
        setTask,
        handleAddTask,
        editId,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo(): TodoContextType {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodo must be used within TodoProvider");
  return context;
}
