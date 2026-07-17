import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import "../App.css"


function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const { login } = useAuth()
  const navigate = useNavigate()


  async function handleLogin(e) {

    e.preventDefault()

    try {

      await login(email, password)

      navigate("/dashboard")

    } catch (error) {

  if (error.code === "auth/invalid-credential") {
    setMessage("Incorrect email or password")
  } 
  else if (error.code === "auth/user-not-found") {
    setMessage("No account found with this email")
  } 
  else {
    setMessage("Something went wrong. Please try again.")
  }

}

  }


  return (

    <div className="login-container">

      <div className="login-box">

        <h1>Welcome Back</h1>

        <p>Login to your account</p>


        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          <button type="submit">
            Login
          </button>


        </form>


        <p className="message">
          {message}
        </p>

        <p className="signup">
  Don't have an account?{" "}
  <span onClick={() => navigate("/signup")}>
    Sign up
  </span>
</p>


      </div>

    </div>

  )

}


export default Login