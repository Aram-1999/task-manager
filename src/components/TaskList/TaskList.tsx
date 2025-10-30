import type { TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

function TaskList({ tasks, onDelete, onStatusChange }: TaskListProps) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}

export default TaskList;
