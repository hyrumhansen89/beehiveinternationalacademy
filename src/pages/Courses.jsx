import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"

import { db } from "../firebase"

import Layout from "../components/Layout"
import CourseCard from "../components/CourseCard"


function Courses() {

  const [courseList, setCourseList] = useState([])


  useEffect(() => {

    async function getCourses() {

      const querySnapshot = await getDocs(
        collection(db, "courses")
      )


      const coursesFromFirebase = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))


      setCourseList(coursesFromFirebase)

    }


    getCourses()

  }, [])


  return (

    <Layout>

      <h1>
        My Courses
      </h1>


      <div className="dashboard-grid">

        {courseList.map((course) => (

          <CourseCard
            key={course.id}
            course={course}
          />

        ))}

      </div>


    </Layout>

  )

}


export default Courses