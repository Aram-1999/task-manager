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
    <div className='border-2 rounded-xl p-3 mt-5'>
      <div>
        <h3 className='font-semibold text-2xl inline'>{title}</h3>
        <button className='float-right mx-3 p-1 bg-red-300 rounded hover:cursor-pointer' onClick={() => onDelete(id)}>Delete</button>
        <select className='float-right mx-3 border p-1 rounded' value={status}
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
        
      </div>

      <div>
        <p className='text-lg mt-1'>{description}</p>
      </div>
      <div className='mt-3'>
        <p className='inline'>Priority: {priority}</p>
        <p className='inline mx-10'>Due: {dueDate}</p>
      </div>
    </div>
  );
}

export default TaskItem;
