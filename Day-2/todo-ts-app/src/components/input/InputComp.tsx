import { useTodo } from "@/context/TodoContext";
import React, { useRef, useState } from "react";

type Todo = {
  text: string;
};

export default function InputComp() {

  const {addTodo, editTodo, task, setTask} = useTodo()
  const [editState, setEditState] = useState<boolean>(false)

  const handleAddTask = ():void =>{
    if(!task) return;
  
    addTodo(task);
    setTask('');
  }


  return (
    <div className="flex gap-4">
      <input
        className="border-2 rounded-lg px-2 py-1 focus:ring-amber-400 w-75 "
        type="text"
        placeholder="Type your task here..."
        value={task}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value) }
      />
      <button onClick={handleAddTask} className="border rounded-lg px-2 py-1">
        {editState? "Update" : "+Add task"}
      </button>
    </div>
  );
}
