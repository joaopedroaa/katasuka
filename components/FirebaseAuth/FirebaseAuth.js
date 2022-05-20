// import Link from 'next/link'
// import TemplatePage from "../TemplatePage"
// import firebase from '../firebase/clientApp'
import { useState, useEffect } from "react"
import styles from './FirebaseAuth.module.scss'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { GoogleAuthProvider, GithubAuthProvider, EmailAuthProvider, getAuth } from 'firebase/auth'

import firebase from 'firebase/app';
// import { firebase } from '../../firebase/clientApp'
// import { mapUserData } from "../../firebase/mapUserData"
import { initFirebase } from "../../firebase/clientApp"
import { useAuthState } from "react-firebase-hooks/auth";
import { mapUserData, setUserCookie } from "../../firebase/handleCookies";
import { useUser } from "../../firebase/useUser";
import { useRouter } from "next/router";



initFirebase()



const firebaseAuthConfig = ({ signInSuccessUrl }) => ({
  signInFlow: 'popup',
  signInSuccessUrl,
  // credentialHelper: 'none',
  tosUrl: '/about/terms-of-service',
  privacyPolicyUrl: '/about/privacy-policy',
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    },
    GoogleAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID,
  ]
});



export default function FirebaseAuth() {
  const router = useRouter()
  const auth = getAuth()
  const [renderAuth, setRenderAuth] = useState(false)
  const { userCache } = useUser()
  const signInSuccessUrl = "/profile"


  useEffect(() => {
    if (typeof window !== 'undefined') setRenderAuth(true)
  }, [])


  if (userCache) router.push(signInSuccessUrl);
  return (
    <>
      <div className={styles.loginCard} >
        <h1>Login Katasuka</h1>
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig({ signInSuccessUrl })}
          firebaseAuth={auth}
          signInSuccessUrl={signInSuccessUrl}
        />
      </div>
    </>
  );
}




{/* {auth.currentUser.displayName && <p>Welcome {auth.currentUser.displayName}! You are now signed-in!</p>} */ }
{/* <a onClick={() => firebase.auth().signOut()}>Sign-out</a> */ }
