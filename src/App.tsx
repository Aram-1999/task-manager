import { useState } from "react";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import type { Task, TaskStatus } from "./types";
import TaskFilter from "./components/TaskFilter/TaskFilter";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }>({});

  const handleDelete = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    handleFiltering(filters, newTasks)
  };

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(newTasks);
    setFilteredTasks(newTasks);
  };

  const handleSubmit = (task: Task) => {
    const newTasks = [...tasks, task]
    setTasks(newTasks);
    setFilteredTasks(newTasks);
    handleFiltering(filters, newTasks)
  };

  const handleFiltering = (newFilters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }, newTasksDelete?: Task[]) => {
    setFilters(newFilters)
    setFilteredTasks(() => {
      let newTasks;
      if (newTasksDelete) {
        newTasks = [...newTasksDelete];
      } else {
        newTasks = [...tasks]
      }

      if (newFilters.status) {
          newTasks = newTasks.filter((task) => task.status === newFilters.status);
      } 

      if (newFilters.priority) {
        newTasks = newTasks.filter((task) => task.priority === newFilters.priority)
      }
      return newTasks;
    });
  };

  return (
    <div className="m-3">
      <h1 className="text-3xl font-bold text-center mb-5">Task Manager App</h1>
      <Form onSubmit={handleSubmit} />
      <TaskFilter onFilterChange={handleFiltering} />
      {filteredTasks.length === 0 ? (
        <p className="text-center">No Tasks to Display</p>
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
