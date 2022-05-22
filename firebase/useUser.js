import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getAuth } from "firebase/auth";
import { initFirebase } from '../firebase/clientApp'
import {
  removeUserCookie,
  setUserCookie,
  getUserFromCookie,
  mapUserData
} from '../firebase/handleCookies'

initFirebase()

const useUser = () => {
  const [user, setUser] = useState()

  const router = useRouter()
  const auth = getAuth()

  const logout = async () => {
    try {
      auth.signOut();
      removeUserCookie();
      router.push("/login");
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    // Firebase updates the id token every hour, this makes sure the react state and the cookie are both kept up to date
    const cancelAuthListener = auth.onIdTokenChanged((user) => {
      if (user) {
        const userData = mapUserData(user)
        setUserCookie(userData)
        setUser(userData)
      } else {
        removeUserCookie()
        setUser()
      }
    })

    const userFromCookie = getUserFromCookie()
    if (userFromCookie) {
      setUser(userFromCookie)
    }

    // if (!userFromCookie) {
    //   router.push('/login')
    //   return
    // }

    return () => {
      cancelAuthListener()
    }
  }, [])

  return { user, logout }
}

export { useUser }
