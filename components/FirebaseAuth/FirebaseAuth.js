import Link from 'next/link'
import TemplatePage from "../TemplatePage"
// import firebase from '../firebase/clientApp'
import styles from './FirebaseAuth.module.scss'
import { firebase } from '../../firebase/clientApp'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { setUserCookie, mapUserData } from 'firebase/auth'
import { useState, useEffect } from "react"


const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/profile',
  credentialHelper: 'none',
  tosUrl: '/about/terms-of-service',
  privacyPolicyUrl: '/about/privacy-policy',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => true,
  },
};


export default function SignInScreen() {
  return (
    <div className={styles.loginCard}>
      <h1>Login Katasuka</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}




{/* {auth.currentUser.displayName && <p>Welcome {auth.currentUser.displayName}! You are now signed-in!</p>} */}
{/* <a onClick={() => firebase.auth().signOut()}>Sign-out</a> */}
