import type { Task, TaskPriority, TaskStatus } from "../../types";
import { useState } from "react";
interface FormProps {
    onSubmit: (task: Task) => void;
}

function Form({ onSubmit }: FormProps) {
  const [formData, setFormData] = useState<Task>({
    title: "",
    description: "",
    dueDate: dateDisplay(new Date()),
    id: "",
    priority: "low",
    status: "pending",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((f) => ({
      ...f,
      [name]: value,
    }));
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((f) => ({
      ...f,
      dueDate: dateDisplay(new Date(event.target.value)),
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (isTaskStatus(value)) {
      setFormData((f) => ({
        ...f,
        status: value,
      }));
    } else if (isTaskPriority(value)) {
      setFormData((f) => ({
        ...f,
        priority: value,
      }));
    }
  };

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({
      ...formData,
      id: Date.now().toString(),
    });
    setFormData({
      title: "",
      description: "",
      dueDate: dateDisplay(new Date()),
      id: "",
      priority: "low",
      status: "pending",
    });
  };

  const timeNow = Date.now().toString();
  const formIDs = {
    title: `title-${timeNow}`,
    description: `description-${timeNow}`,
    dueDate: `dueDate-${timeNow}`,
    priority: `priority-${timeNow}`,
    status: `status-${timeNow}`
  }

  return (
    <form onSubmit={handleForm}>
      <label htmlFor={formIDs.title}>Title</label>
      <input
        type="text"
        name="title"
        id={formIDs.title}
        value={formData.title}
        onChange={handleChange}
      />
      <br />
      <label htmlFor={formIDs.description}>Description</label>
      <textarea
        name="description"
        id={formIDs.description}
        value={formData.description}
        onChange={handleChange}
      />
      <br />
      <label htmlFor={formIDs.dueDate}>Due Date</label>
      <input
        type="date"
        id={formIDs.dueDate}
        name="dueDate"
        value={formData.dueDate}
        onChange={handleDateChange}
      />
      <select name="priority" id={formIDs.priority} value={formData.priority} onChange={handleSelectChange}>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      <select name="status" id={formIDs.status} value={formData.status} onChange={handleSelectChange}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Add!</button>
    </form>
  );
}

export function dateDisplay(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function isTaskStatus(status: string): status is TaskStatus {
  return (
    status === "pending" || status === "in-progress" || status === "completed"
  );
}

export function isTaskPriority(priority: string): priority is TaskPriority {
  return priority === "low" || priority === "medium" || priority === "high";
}

export default Form;
