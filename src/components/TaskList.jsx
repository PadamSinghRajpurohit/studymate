import TaskItem from './TaskItem.jsx'

export default function TaskList({ tasks, hasAnyTask, onToggle, onEdit, onDelete }) {
  if (!hasAnyTask) {
    return (
      <section className="task-list">
        <p className="empty-state">No tasks yet. Add your first study task!</p>
      </section>
    )
  }

  if (tasks.length === 0) {
    return (
      <section className="task-list">
        <p className="empty-state">No matching tasks found.</p>
      </section>
    )
  }

  return (
    <section className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </section>
  )
}
