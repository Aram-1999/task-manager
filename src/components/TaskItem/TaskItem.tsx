import type { TaskItemProps } from "../../types";
import { isTaskStatus } from "../Form/Form";
 let optionId = 0;
function TaskItem({ task, onDelete, onStatusChange }: TaskItemProps) {
  const { description, dueDate, id, priority, status, title } = task;

  const statusMap = new Map([
    ["pending", "Pending"],
    ["in-progress", "In Progress"],
    ["completed", "Completed"],
  ]);

  const options = [
    <option key={String(optionId)} value={status}>
      {statusMap.get(status)}
    </option>,
  ];
  statusMap.delete(status);
  for (const [key, display] of statusMap) {
    optionId++;
    options.push(
      <option key={String(optionId)} value={key}>
        {display}
      </option>
    );
  }

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <select value={status}
          onChange={(event) => {
            const optionValue = event.target.value;
            if (isTaskStatus(optionValue)) {
              onStatusChange(id, optionValue);
            }
          }}
          name="status"
          id={String(optionId)}
        >
          {options.map((option) => option)}
        </select>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>

      <div>
        <p>{description}</p>
      </div>
      <div>
        <p>Priority: {priority}</p>
        <p>Due: {dueDate}</p>
      </div>
    </div>
  );
}

export default TaskItem;
