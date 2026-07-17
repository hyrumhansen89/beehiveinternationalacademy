import { Link } from "react-router-dom"



function Sidebar() {
  return (
    <div className="sidebar">

      <h2>Beehive Academy</h2>

      <nav>

        <Link to="/dashboard">🏠 Dashboard</Link>
        <Link to="/courses">📚 Courses</Link>
        <Link to="/classes">🎓 Classes</Link>
        <Link to="/tutoring">👨‍🏫 Tutoring</Link>
        <Link to="/games">🎮 Games & Activities</Link>
        <Link to="/schedule">📅 Schedule</Link>
        <Link to="/payments">💳 Payments</Link>
        <Link to="/assignments">📝 Assignments</Link>
        <Link to="/progress">📊 Progress</Link>
        <Link to="/profile">👤 Profile</Link>

      </nav>

    </div>
  )
}

export default Sidebar