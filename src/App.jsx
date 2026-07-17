import { Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"

import Courses from "./pages/Courses"
import Games from "./pages/Games"
import Schedule from "./pages/Schedule"
import Payments from "./pages/Payments"
import Assignments from "./pages/Assignments"
import Progress from "./pages/Progress"
import Profile from "./pages/Profile"
import Classes from "./pages/Classes"
import Tutoring from "./pages/Tutoring"

import ProtectedRoute from "./components/ProtectedRoute"


function App() {

  return (

    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/signup" element={<Signup />} />


      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />


      <Route
        path="/courses"
        element={
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        }
      />

      <Route
  path="/classes"
  element={
    <ProtectedRoute>
      <Classes />
    </ProtectedRoute>
  }
/>


<Route
  path="/tutoring"
  element={
    <ProtectedRoute>
      <Tutoring />
    </ProtectedRoute>
  }
/>


      <Route
        path="/games"
        element={
          <ProtectedRoute>
            <Games />
          </ProtectedRoute>
        }
      />


      <Route
        path="/schedule"
        element={
          <ProtectedRoute>
            <Schedule />
          </ProtectedRoute>
        }
      />


      <Route
        path="/payments"
        element={
          <ProtectedRoute>
            <Payments />
          </ProtectedRoute>
        }
      />


      <Route
        path="/assignments"
        element={
          <ProtectedRoute>
            <Assignments />
          </ProtectedRoute>
        }
      />


      <Route
        path="/progress"
        element={
          <ProtectedRoute>
            <Progress />
          </ProtectedRoute>
        }
      />


      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />


    </Routes>

  )
}


export default App