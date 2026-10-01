import { useState, useEffect } from 'react'

const EMPTY_FORM = { title: '', subject: '', dueDate: '' }

export default function TaskForm({ onAdd, onUpdate, editingTask, onCancelEdit }) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [error, setError] = useState('')

  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title,
        subject: editingTask.subject,
        dueDate: editingTask.dueDate,
      })
      setError('')
    } else {
      setForm(EMPTY_FORM)
      setError('')
    }
  }, [editingTask])

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (e.target.name === 'title') setError('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.title.trim()) {
      setError('Task title cannot be empty.')
      return
    }
    if (editingTask) {
      onUpdate(editingTask.id, form)
    } else {
      onAdd(form)
      setForm(EMPTY_FORM)
    }
    setError('')
  }

  const isEditing = Boolean(editingTask)

  return (
    <section className="task-form-section">
      <h2 className="section-title">{isEditing ? 'Edit Task' : 'Add Task'}</h2>
      <form className="task-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="title">Task Title *</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="e.g. Complete mathematics assignment"
            value={form.title}
            onChange={handleChange}
            className={error ? 'input-error' : ''}
          />
          {error && <span className="error-msg">{error}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="subject">Subject (optional)</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="e.g. Mathematics"
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Due Date (optional)</label>
            <input
              id="dueDate"
              name="dueDate"
              type="date"
              value={form.dueDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {isEditing ? 'Save Changes' : 'Add Task'}
          </button>
          {isEditing && (
            <button type="button" className="btn btn-secondary" onClick={onCancelEdit}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  )
}
