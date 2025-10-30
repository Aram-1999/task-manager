import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import type { Task, TaskStatus } from "./types";
import TaskFilter from "./components/TaskFilter/TaskFilter";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  const handleDelete = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    setFilteredTasks(newTasks);
  };

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(newTasks);
    setFilteredTasks(newTasks);
  };

  const handleSubmit = (task: Task) => {
    setTasks([...tasks, task]);
    setFilteredTasks([...tasks, task]);
  };

  const handleFiltering = (filters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) => {
    setFilteredTasks(() => {
      let newTasks;
      switch (filters.status) {
        case "pending":
          newTasks = tasks.filter((task) => task.status === "pending");
          break;
        case "in-progress":
          newTasks = tasks.filter((task) => task.status === "in-progress");
          break;
        case "completed":
          newTasks = tasks.filter((task) => task.status === "completed");
          break;
        default:
          newTasks = tasks;
      }

      switch (filters.priority) {
        case "high":
          newTasks = newTasks.filter((task) => task.priority === "high");
          break;
        case "medium":
          newTasks = newTasks.filter((task) => task.priority === "medium");
          break;
        case "low":
          newTasks = newTasks.filter((task) => task.priority === "low");
      }
      return newTasks
    });
  };

  return (
    <div>
      <h1>Task Manager App</h1>
      <Form onSubmit={handleSubmit} />
      <TaskFilter onFilterChange={handleFiltering} />
      {filteredTasks.length === 0 ? (
        <p>No Tasks to Display</p>
      ) : (
        <TaskList
          tasks={filteredTasks}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}

export default App;
