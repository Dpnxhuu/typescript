import { useTodo } from "@/context/TodoContext";
import React, { useRef, useState } from "react";


export default function InputComp() {

  const {task, setTask, handleAddTask, editId} = useTodo()

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
        {editId? "Update" : "+Add task"}
      </button>
    </div>
  );
}
