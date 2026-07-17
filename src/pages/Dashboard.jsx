import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="login-container">
      <div className="login-box">

        <h1>Dashboard</h1>

  
      <p>Welcome, {user.email}</p>
  

        <button
  onClick={() => {
    logout()
    navigate("/")
  }}
>
  Logout
</button>

      </div>
    </div>
  )
}

export default Dashboard