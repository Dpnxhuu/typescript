// TodoContext.tsx
"use client"
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoContextType = {
  todos: Todo[];
  task: string,
  setTask: Dispatch<SetStateAction<string>>;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void; // Add this
  deleteTodo: (id: number) => void; // Add this
  editTodo: (id: number, text: string) => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);


export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>('');

  const addTodo = (text: string) => {
    setTodos(prev => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const editTodo = (id: number, text: string) => {
    setTodos(prev => prev.map((t) => t.id === id? {...t, text: text} : t))
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo, task, setTask }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo():TodoContextType {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodo must be used within TodoProvider');
  return context;
}