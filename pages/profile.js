/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import styles from '../styles/Profile.module.scss'
import TemplatePage from "../components/TemplatePage"
import FirebaseAuth from "../components/FirebaseAuth"
// import {firebase, db} from "../firebase/clientApp"
import { firebase, db } from "../firebase/clientApp"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import { collection, doc, query, getDoc, getDocs, where } from 'firebase/firestore';
import { writeFavorites, writeAnimes } from "../utils/cloudFirestore/Favorite"
import { useState, useEffect } from 'react';
import SimpleCard from '../components/SimpleCard'
// writeFavorites(user.uid, ["932", "384"])





const User = () => {
  const [user, loading, error] = useAuthState(firebase.auth())
  const [favoriteCollection, setFavoriteCollection] = useState([])
  const [favoriteCollectionLoad, setFavoriteCollectionLoad] = useState()
  const [animesCollection, setAnimesCollection] = useState([])
  const [animesCollectionLoad, setAnimesCollectionLoad] = useState()

  function deleteId(arr, value) {
    const array = arr.filter(x => x !== value);
    setFavoriteCollection({ mal_id: array });
    writeFavorites(user.uid, array)
  }

  function findId(arr, mal_id) {
    const papad = arr.filter(x => x.id == mal_id)[0]
    return papad
    // console.log(arr);
    // console.log(mal_id);
    // console.log(papad);
  }

  useEffect(() => {
    const fetchFavorites = async (userUid) => {
      const userDoc = await getDoc(doc(db, "favorites", userUid))
      setFavoriteCollection(userDoc.data())
      setFavoriteCollectionLoad(1)

    }

    const fetchAnimes = async () => {
      const animeCollection = query(collection(db, "animes"), where("data.mal_id", "in", favoriteCollection.mal_id))
      const animeQuery = await getDocs(animeCollection)
      // setAnimesCollection(animeQuery)
      setAnimesCollection(animeQuery.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      setAnimesCollectionLoad(1)
    }

    if (user) fetchFavorites(user.uid)
    if (favoriteCollectionLoad && favoriteCollection != undefined) fetchAnimes()

  }, [user, favoriteCollectionLoad])


  if (user) {

    writeFavorites(user.uid, [50265, 11061, 21, 43608])


    return (
      <TemplatePage title="Katasuka - Profile" description="Katasuka">
        <div className={styles.userCard}>
          <img src={user.photoURL} alt={user.displayName} />
          <h1>{user.displayName}</h1>
          <p>{user.email}</p>
          <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        </div>

        <div className={styles.favoritesList}>
          {/* {animesCollection && animesCollection.docs.map((doc) => { */}
          {favoriteCollectionLoad && animesCollectionLoad && favoriteCollection.mal_id.map((mal_id) => {
            const { id, data } = findId(animesCollection, mal_id)
            const slug = "anime"

            return (
              <Link key={mal_id} href={`/${slug}/${mal_id}`}  >
                <li >
                  <SimpleCard id={mal_id} slug={slug} imageUrl={data.images.webp.large_image_url} title={data.title} />
                  <button onClick={() => deleteId(favoriteCollection.mal_id, mal_id)}>Remove</button>
                </li>
              </Link>
            )
          })
          }
        </div>
      </TemplatePage>
    )
  }


  if (loading) return (
    <TemplatePage title="Loading" description="Katasuka">
      <div className={styles.main}>
        <p>Loading</p>

      </div>
    </TemplatePage>
  )

  return (
    <TemplatePage title="Logue" description="Katasuka">
      <div className={styles.main}>
        <h1>403</h1>
        <p>Você precisa estar logado(a) para ver seu perfil.</p>
      </div>
    </TemplatePage>
  )
}


export default User





    // const aa = writeFavorites(user.uid, [50265, 5114])
    // writeFavorites(user.uid, [50265, 11061, 21])


    // console.log(animesCollection);
    // animesCollection && animesCollection.forEach(element => {
    //   console.log(element);

    // });



    // const datas = animesInfos

    // [colId] = colData
    // setAnimesInfos(...animesInfos, )

    // id: doc.data().data
    // for (let i = 0; i < favoriteCollection.mal_id.length; i++) {
    //   const am = favoriteCollection.mal_id[i];
    //   if (am == colId) {
    //     console.log(am);
    //     break
    //   }
    // }

    // console.log(animesCollection.docs);
