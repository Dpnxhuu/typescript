"use client";
import { useTodo } from "@/context/TodoContext";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

type TodoProp = {
  id: number;
  text: string;
  completed: boolean;
  onEdit: (id: number, text: string) => void;
};

function TaskCard({ id, text, completed, onEdit }: TodoProp) {
  const { toggleTodo, deleteTodo } = useTodo();

  return (
    <div className="flex w-full items-center justify-between bg-gray-500 p-3 rounded-lg overflow-hidden min-h-14 shrink-0">
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          checked={completed}
          className={`accent-green-500 cursor-pointer`}
          onChange={() => toggleTodo(id)}
          id={String(id)}
        />
        <label htmlFor={String(id)}
          className={`w-50 lg:w-65 overflow-auto ${completed ? "line-through opacity-50" : "text-base"}`}
        >
          {text}
        </label>
      </div>
      <div className="flex gap-3 items-center">
        <span onClick={() => onEdit(id, text)}  className="lg:hover:bg-lightBackground lg:hover:dark:bg-white/10 active:dark:bg-white/10 p-1.5 rounded-sm cursor-pointer transition-all lg:duration-300 duration-150">
          <Pencil size={16} />
        </span>
        <span onClick={() => deleteTodo(id)} className="lg:hover:bg-lightBackground lg:hover:dark:bg-white/10 active:dark:bg-white/10 p-1.5 rounded-sm cursor-pointer transition-all lg:duration-300 duration-150">
          <Trash2 size={16} />
        </span>
      </div>
    </div>
  );
}

type Filter = "All" | "Active" | "Completed";

export default function TaskList() {
  const { todos, editTodo } = useTodo();
  const [filter, setFilter] = useState<Filter>("All")

  const filteredTasks = todos.filter((todo) => {
    if(filter === "Active")  return !todo.completed
    else if (filter === "Completed") return todo.completed
    return true
  })


  return (
    <div className="relative flex flex-col gap-3 overflow-y-auto max-h-[calc(100vh-200px)] pr-1 pb-4">
      <div className="flex justify-between w-100 px-1 sticky top-0 bg-gray-800 p-2 rounded-md">
        <div className="flex gap-x-2 items-center">
          <button onClick={() => setFilter("All")} className={` cursor-pointer ${filter === "All" ? "font-bold" : "text-gray-400"} `}>All</button>
          <p className="h-3.5 w-px bg-black dark:bg-gray-600" />
          <button onClick={() => setFilter("Active")} className={`cursor-pointer ${filter === "Active" ? "font-bold" : "text-gray-400"}`}>Active</button>
          <p className="h-3.5 w-px bg-black dark:bg-gray-600" />
          <button onClick={() => setFilter("Completed")} className={` cursor-pointer ${filter === "Completed" ? "font-bold" : "text-gray-400"}`}>Completed</button>
        </div>
        <div className="flex gap-2 text-gray-500">
          <span className="font-bold">{todos.length}</span>
          <p>Task{todos.length>1? "s" : ""} left</p>
        </div>
      </div>

      {/* CARDS */}
      <div className="flex flex-col gap-2">
        {filteredTasks.map(({ id, text, completed }) => (
          <TaskCard key={id} id={id} text={text} completed={completed} onEdit={editTodo} />
        ))}
      </div>
      {todos.length < 1 && (
        <div className="text-center text-xl text-white">empty</div>
      )}
    </div>
  );
}
