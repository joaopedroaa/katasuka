
export {default} from "./FirebaseAuth"
import Link from 'next/link'
import styles from '../../styles/AnimeHome.module.scss'
import TemplatePage from "../TemplatePage"
// import firebase from '../firebase/clientApp'
import { firebase } from '../../firebase/clientApp'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { setUserCookie, mapUserData } from 'firebase/auth'
import { useState, useEffect } from "react"


const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/profile',
  credentialHelper: 'none',
  signInOptions: [
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};


function SignInScreen() {
  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      {/* {auth.currentUser.displayName && <p>Welcome {auth.currentUser.displayName}! You are now signed-in!</p>} */}
      {/* <a onClick={() => firebase.auth().signOut()}>Sign-out</a> */}
    </div>
  );
}


export default SignInScreen
