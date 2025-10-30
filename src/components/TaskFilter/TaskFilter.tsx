import type { TaskFilterProps } from "../../types";
import { useState } from "react";
import { isTaskPriority, isTaskStatus } from "../Form/Form";
import type { TaskStatus } from "../../types";

function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }>({});

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = event.target;
    if (value === 'all-statuses') {
        const newFilters = {...filters}
        delete newFilters.status
        setFilters(newFilters)
        onFilterChange(newFilters)
    }

    if (value === 'all-priorities') {
        const newFilters = {...filters}
        delete newFilters.priority
        setFilters(newFilters)
        onFilterChange(newFilters)
    }

    if (value !== 'all-statuses' && value !== 'all-priorities') {
        const newFilters = {...filters, [name]: value}
        setFilters(newFilters)
        onFilterChange(newFilters);
    } 

    




    // if (value === "all-statuses") {
    //   setFilters((prev) => {
    //     const newFilters = { ...prev };
    //     delete newFilters.status;
    //     return newFilters;
    //   });
    // }

    // if (value === "all-priorities") {
    //   setFilters((prev) => {
    //     const newFilters = { ...prev };
    //     delete newFilters.priority;
    //     return newFilters;
    //   });
    // }

    // if (isTaskStatus(value)) {
    //   setFilters((prev) => ({ ...prev, status: value }));
    //   onFilterChange({ status: value });
    // }

    // if (isTaskPriority(value)) {
    //   setFilters((prev) => ({ ...prev, priority: value }));
    //   onFilterChange({ priority: value });
    // }
  };
  return (
    <div>
      <select
        name="status"
        id="status-filter"
        value={filters.status}
        onChange={handleFilter}
      >
        <option value="all-statuses">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <select
        name="priority"
        id="priority-filter"
        value={filters.priority}
        onChange={handleFilter}
      >
        <option value="all-priorities">All Priorities</option>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
    </div>
  );
}

export default TaskFilter;
