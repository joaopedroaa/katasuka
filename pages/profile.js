/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from '../styles/Profile.module.scss'
import TemplatePage from "../components/TemplatePage"
import FirebaseAuth from "../components/FirebaseAuth"
// import {firebase, db} from "../firebase/clientApp"
import { firebase, db } from "../firebase/clientApp"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { writeFavorites, ReadFavorites, WriteFavorites } from "../utils/cloudFirestore/Favorite"
import { useState, useEffect } from 'react';

// writeFavorites(user.uid, ["932", "384"])











const User = () => {
  const [user, loading, error] = useAuthState(firebase.auth())
  const [favoriteAnimes, setFavoriteAnimes] = useState([])
  const [favoriteAnimesLoad, setFavoriteAnimesLoad] = useState(0)



  function deleteId(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    console.log(arr);
    setFavoriteAnimes({ mal_id: arr });
    WriteFavorites(user.uid, arr)
  }










  useEffect(() => {
    const fetchFavorites = async (userUid) => {
      const userDoc = doc(db, "favorites", userUid)
      await getDoc(userDoc).then((doc) => {
        if (doc.exists()) {
          setFavoriteAnimes(doc.data())
          setFavoriteAnimesLoad(1)
        }
      })
    }

    if (user)
      fetchFavorites(user.uid)

  }, [user, favoriteAnimesLoad])




  if (user) {
    console.log(favoriteAnimes);
    // const aa = WriteFavorites(user.uid, ["1", "2", "4", "5"])


    // console.log(aa);

    return (
      <TemplatePage title="Katasuka - Profile" description="Katasuka">
        <div className={styles.userCard}>
          <img src={user.photoURL} alt={user.displayName} />
          <h1>{user.displayName}</h1>
          <p>{user.email}</p>
          <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        </div>

        {/* {favoriteAnimesLoad && <h1>Carregou</h1>}
        {!favoriteAnimesLoad && <h1>Nao Carregou</h1>} */}

        <div className={styles.favoritesList}>

          {favoriteAnimesLoad && favoriteAnimes.mal_id.map((anime_id) => (
            <li key={anime_id}>
              <p>{anime_id}</p>
              <button onClick={() => deleteId(favoriteAnimes.mal_id, anime_id)}>Remove</button>
            </li>
          ))}
        </div>



        {/* {favorites && favorites.mal_id.map((id) => {
          return (
            <h1 key={id}>{id}</h1>
          )
        })} */}
      </TemplatePage>

    )
  }


  if (loading) return (
    <TemplatePage title="Katasuka - Loading" description="Katasuka">
      <p>Loading</p>
    </TemplatePage>
  )

  if (!user) {
    return (
      <TemplatePage title="Katasuka - Loading" description="Katasuka">
        <FirebaseAuth />
      </TemplatePage>
    )
  }
}


export default User
