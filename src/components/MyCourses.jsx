import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"

import { db } from "../firebase"
import { useAuth } from "../context/AuthContext"


function MyCourses() {

  const { user } = useAuth()

  const [courses, setCourses] = useState([])


  useEffect(() => {

    async function getMyCourses() {

      if (!user) return


      const q = query(
        collection(db, "enrollments"),
        where("studentId", "==", user.uid)
      )


      const querySnapshot = await getDocs(q)


      const enrolledCourses = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))


      setCourses(enrolledCourses)

    }


    getMyCourses()

  }, [user])


  return (

    <div>

      <h2>
        My Courses
      </h2>


      {courses.length === 0 ? (

        <p>
          You are not enrolled in any courses yet.
        </p>

      ) : (

        courses.map((course) => (

          <div className="card" key={course.id}>

            <h3>
              {course.title}
            </h3>


            <p>
              Status: {course.status}
            </p>


            <button>
              Continue Learning
            </button>


          </div>

        ))

      )}

    </div>

  )

}


export default MyCourses