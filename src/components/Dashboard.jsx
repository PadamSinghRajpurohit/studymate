export default function Dashboard({ total, pending, completed }) {
  return (
    <section className="dashboard">
      <div className="dashboard-card">
        <span className="dashboard-count">{total}</span>
        <span className="dashboard-label">Total Tasks</span>
      </div>
      <div className="dashboard-card dashboard-card--pending">
        <span className="dashboard-count">{pending}</span>
        <span className="dashboard-label">Pending</span>
      </div>
      <div className="dashboard-card dashboard-card--completed">
        <span className="dashboard-count">{completed}</span>
        <span className="dashboard-label">Completed</span>
      </div>
    </section>
  )
}
