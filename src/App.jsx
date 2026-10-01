import { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard.jsx'
import TaskForm from './components/TaskForm.jsx'
import TaskControls from './components/TaskControls.jsx'
import TaskList from './components/TaskList.jsx'

const STORAGE_KEY = 'studymate_tasks'

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

export default function App() {
  const [tasks, setTasks] = useState(loadTasks)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [editingTask, setEditingTask] = useState(null)

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  function addTask(data) {
    const task = {
      id: generateId(),
      title: data.title.trim(),
      subject: data.subject.trim(),
      dueDate: data.dueDate,
      completed: false,
    }
    setTasks(prev => [task, ...prev])
  }

  function updateTask(id, data) {
    setTasks(prev =>
      prev.map(t =>
        t.id === id
          ? { ...t, title: data.title.trim(), subject: data.subject.trim(), dueDate: data.dueDate }
          : t
      )
    )
    setEditingTask(null)
  }

  function toggleTask(id) {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id))
    if (editingTask && editingTask.id === id) setEditingTask(null)
  }

  function startEdit(task) {
    setEditingTask(task)
  }

  function cancelEdit() {
    setEditingTask(null)
  }

  const filteredTasks = tasks.filter(t => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'pending' && !t.completed) ||
      (filter === 'completed' && t.completed)

    const q = search.trim().toLowerCase()
    const matchesSearch =
      !q ||
      t.title.toLowerCase().includes(q) ||
      t.subject.toLowerCase().includes(q)

    return matchesFilter && matchesSearch
  })

  const total = tasks.length
  const completed = tasks.filter(t => t.completed).length
  const pending = total - completed

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">StudyMate</h1>
        <p className="header-subtitle">Plan your study. Track your progress.</p>
      </header>

      <main className="main">
        <Dashboard total={total} pending={pending} completed={completed} />

        <TaskForm
          onAdd={addTask}
          onUpdate={updateTask}
          editingTask={editingTask}
          onCancelEdit={cancelEdit}
        />

        <TaskControls
          filter={filter}
          onFilterChange={setFilter}
          search={search}
          onSearchChange={setSearch}
        />

        <TaskList
          tasks={filteredTasks}
          hasAnyTask={tasks.length > 0}
          onToggle={toggleTask}
          onEdit={startEdit}
          onDelete={deleteTask}
        />
      </main>
    </div>
  )
}
