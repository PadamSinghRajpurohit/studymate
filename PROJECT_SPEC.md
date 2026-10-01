# StudyMate — Project Specification

## 1. App name
StudyMate

## 2. Purpose
StudyMate is a simple student task planner. A student can add study tasks, track their completion, search them, and filter them.

## 3. Technology
- React
- Vite
- JavaScript
- CSS
- Browser localStorage

No backend is required.

## 4. Main screen

The page should contain:

### Header
- StudyMate logo/name
- Short text: "Plan your study. Track your progress."

### Dashboard
Three small cards:
- Total Tasks
- Pending
- Completed

### Add Task section
Form fields:
- Task title (required)
- Subject (optional)
- Due date (optional)
- Add Task button

### Task controls
- Search box
- Filter buttons: All / Pending / Completed

### Task list
Each task should show:
- Checkbox
- Title
- Subject, if entered
- Due date, if entered
- Edit button
- Delete button

Completed tasks should look visually different and show the title as completed.

## 5. Responsive design
The app must work on:
- Mobile phones
- Tablets
- Desktop screens

On small screens, cards and forms can stack vertically.

## 6. Data persistence
Use localStorage.

Storage key:
studymate_tasks

If the browser is refreshed, tasks must remain.

## 7. Task object

Use this basic structure:

{
  id: "unique-id",
  title: "Complete mathematics assignment",
  subject: "Mathematics",
  dueDate: "2026-10-05",
  completed: false
}

## 8. Validation
- Title cannot be empty.
- Show a simple message if the user tries to add an empty task.
- Subject and due date are optional.

## 9. Empty state
If there are no tasks, display:
"No tasks yet. Add your first study task!"

If a search/filter returns no matching tasks, display:
"No matching tasks found."

## 10. Visual style
Keep it clean and student-friendly:
- Simple modern layout
- Clear typography
- Rounded cards/buttons
- Good spacing
- Good contrast
- No excessive animations

Do not use stock images or external image APIs.
