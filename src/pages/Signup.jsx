import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase"
import "../App.css"


function Signup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const { signup } = useAuth()
  const navigate = useNavigate()


  async function handleSignup(e) {

    e.preventDefault()

    if (!name || !email || !password) {
  setMessage("Please fill out all fields")
  return
}


    try {

  const result = await signup(email, password)

  const user = result.user


  await setDoc(doc(db, "users", user.uid), {

    name: name,
    email: user.email,
    createdAt: new Date(),
    role: "student"

  })


  navigate("/dashboard")


} catch (error) {

  if (error.code === "auth/email-already-in-use") {
    setMessage("An account already exists with this email")
  }
  else if (error.code === "auth/weak-password") {
    setMessage("Password must be at least 6 characters")
  }
  else {
    setMessage("Something went wrong. Please try again.")
  }

}

  }


  return (

    <div className="login-container">

      <div className="login-box">

        <h1>Create Account</h1>

        <p>Sign up for a new account</p>


        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />


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
            Sign Up
          </button>


        </form>


        <p className="message">
          {message}
        </p>


      </div>

    </div>

  )

}


export default Signup