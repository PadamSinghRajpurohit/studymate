export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const formattedDate = task.dueDate
    ? new Date(task.dueDate + 'T00:00:00').toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : null

  return (
    <div className={`task-item ${task.completed ? 'task-item--completed' : ''}`}>
      <div className="task-check">
        <input
          type="checkbox"
          id={`task-${task.id}`}
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={`Mark "${task.title}" as ${task.completed ? 'incomplete' : 'complete'}`}
        />
      </div>

      <div className="task-body">
        <label htmlFor={`task-${task.id}`} className="task-title">
          {task.title}
        </label>
        <div className="task-meta">
          {task.subject && (
            <span className="task-meta-item task-subject">{task.subject}</span>
          )}
          {formattedDate && (
            <span className="task-meta-item task-due">Due: {formattedDate}</span>
          )}
        </div>
      </div>

      <div className="task-actions">
        <button
          className="btn btn-edit"
          onClick={() => onEdit(task)}
          aria-label={`Edit "${task.title}"`}
        >
          Edit
        </button>
        <button
          className="btn btn-delete"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete "${task.title}"`}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
