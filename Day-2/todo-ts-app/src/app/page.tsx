"use client";
import InputComp from "@/components/input/InputComp";
import Profile from "@/components/profile/Profile";
import TaskList from "@/components/tasks/TaskList";

export default function Home() {
  return (
    <div className="border h-screen grid grid-cols-[1fr_2fr] gap-4 p-10">
      <aside className="border text-center p-5">
        <Profile />
      </aside>
      <main className="border flex flex-col items-center p-5 gap-5">
        <InputComp />
        <TaskList />
      </main>
    </div>
  );
}
