# Task Manager App

This is a task management app that allows users to create, update, and delete tasks. The app features a form where users can enter the details of a new task, including a title, a short description, a due date, a priority level (low, medium, or high), and a status (pending, in-progress, or completed). Below the form, there is a panel for filtering tasks based on their priority and status. Each task in the list has a dropdown menu to update its status and a delete button to remove the task.

Here is an example of how the app can be used: ![An Example usage of the app](/src/assets/localhost_5173_.png)

## Componenets

### `Form`
A component for adding new tasks. 

### `TaskList`
Displays a list of tasks and allows deletion and status updates. Tasks are displayed using TaskItem component.

### `TaskItem`
Styles and displayes newly created tasks.

### `TaskFilter`
Allows users to filter tasks by status and priority.

### `App`
Everything is connected in the App using Form, TaskList, and TaskFilter components.