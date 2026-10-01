export default function TaskControls({ filter, onFilterChange, search, onSearchChange }) {
  return (
    <section className="task-controls">
      <input
        className="search-input"
        type="text"
        placeholder="Search by title or subject…"
        value={search}
        onChange={e => onSearchChange(e.target.value)}
      />
      <div className="filter-buttons">
        {['all', 'pending', 'completed'].map(f => (
          <button
            key={f}
            className={`btn filter-btn ${filter === f ? 'filter-btn--active' : ''}`}
            onClick={() => onFilterChange(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
    </section>
  )
}
