import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"
import { useAuth } from "../context/AuthContext"


export function useUserProfile() {

  const { user } = useAuth()

  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    async function getProfile() {

      if (!user) {
        setLoading(false)
        return
      }


      const docRef = doc(db, "users", user.uid)

      const docSnap = await getDoc(docRef)


      if (docSnap.exists()) {

        setProfile(docSnap.data())

      }


      setLoading(false)

    }


    getProfile()

  }, [user])


  return { profile, loading }

}