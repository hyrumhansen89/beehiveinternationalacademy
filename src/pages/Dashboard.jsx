import { useUserProfile } from "../hooks/useUserProfile"
import Layout from "../components/Layout"
import MyCourses from "../components/MyCourses"


function Dashboard() {

  const { profile } = useUserProfile()


  return (

  <Layout>

    <h1>
      Welcome, {profile?.name}
    </h1>

    <MyCourses />

    <div className="dashboard-grid">

      <div className="card">
        <h2>My Courses</h2>
        <p>No courses enrolled yet.</p>
      </div>

      <div className="card">
        <h2>Upcoming Schedule</h2>
        <p>No upcoming classes.</p>
      </div>

    </div>

  </Layout>

)
}


export default Dashboard