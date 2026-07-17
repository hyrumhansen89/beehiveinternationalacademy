import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase"
import { useAuth } from "../context/AuthContext"


function CourseCard({ course }) {

  const { user } = useAuth()


  async function enrollCourse() {

    await setDoc(
      doc(
        db,
        "enrollments",
        `${user.uid}_${course.id}`
      ),
      {
        studentId: user.uid,
        courseId: course.id,
        title: course.title,
        status: "active",
        enrolledAt: new Date()
      }
    )


    alert("You are enrolled!")

  }


  return (

    <div className="card">

      <h2>
        {course.title}
      </h2>


      <p>
        {course.description}
      </p>


      <p>
        Level: {course.level}
      </p>


      <p>
        Teacher: {course.instructor}
      </p>


      <p>
        Price: ${course.price}
      </p>


      <button onClick={enrollCourse}>
        Enroll
      </button>


    </div>

  )

}


export default CourseCard