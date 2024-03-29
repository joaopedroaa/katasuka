/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import styles from '../styles/Profile.module.scss'
import TemplatePage from "../components/TemplatePage"
import FirebaseAuth from "../components/FirebaseAuth"
// import {firebase, db} from "../firebase/clientApp"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import { collection, doc, query, getDoc, getDocs, where } from 'firebase/firestore';
import { writeFavorites, writeAnimes } from "../firebase/cloudFirestore/Favorite"
import { useState, useEffect } from 'react';
import { setUserCookie, removeUserCookie, getUserFromCookie, mapUserData } from "../firebase/handleCookies"

import SimpleCard from '../components/SimpleCard'
// writeFavorites(user.uid, ["932", "384"])
import { getAuth } from 'firebase/auth'
import { MdFavorite } from "react-icons/md";
import { initFirebase, db } from "../firebase/clientApp"
import { useUser } from "../firebase/useUser"



initFirebase()

const User = () => {
  // const [user, loading, error] = useAuthState(auth)
  const { user, logout } = useUser()
  const auth = getAuth()


  function deleteId(arr, value) {
    const array = arr.filter(x => x !== value);
    setFavoriteCollection({ mal_id: array });
    writeFavorites(user.uid, array)
  }

  function findId(arr, mal_id) {
    const papad = arr.filter(x => x.id == mal_id)[0]
    return papad
  }


  const [favoriteCollection, setFavoriteCollection] = useState([])
  const [favoriteCollectionRender, setFavoriteCollectionRender] = useState(false)


  const [animesCollection, setAnimesCollection] = useState([])
  const [animesCollectionRender, setAnimesCollectionRender] = useState(false)


  const fetchFavorites = async (userUid) => {
    const userDoc = await getDoc(doc(db, "favorites", userUid))
    setFavoriteCollection(userDoc.data())
    setFavoriteCollectionRender(true)
  }

  const fetchAnimes = async () => {
    const animeCollection = query(collection(db, "animes"), where("data.mal_id", "in", favoriteCollection.mal_id))
    const animeQuery = await getDocs(animeCollection)
    setAnimesCollection(animeQuery.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    setAnimesCollectionRender(true)
  }



  useEffect(() => {
    if (user && !favoriteCollectionRender) {
      console.log("1 -fetchFavorites");
      fetchFavorites(user.uid)
    }

    if (user && favoriteCollectionRender && !animesCollectionRender) {
      console.log("2 - fetchAnimes");
      fetchAnimes()
    }
  }, [user, favoriteCollectionRender, animesCollectionRender])




  if (user) {
    // console.log(user);
    // console.log(`User: ${user}`);
    // setUserCookie(mapUserData(user))
    // console.log(user);
    // writeFavorites(user.uid, [50265, 11061, 21, 43608])

    return (
      <TemplatePage title="Profile">
        <div className={styles.userCard}>
          <img src={user.profilePic} alt={`${user.name} profile pic`} />
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <a onClick={() => logout()}>Sign-out</a>
        </div>

        <div className={styles.favoritesList}>

          {!favoriteCollectionRender && !animesCollectionRender &&
            <div> <h3>Loading Favorites Collection</h3> </div>}

          {favoriteCollectionRender && !animesCollectionRender &&
            <div> <h3>Loading Animes Collection</h3> </div>}

          {favoriteCollectionRender && animesCollectionRender &&
            favoriteCollection.mal_id.map((mal_id) => {
              const { id, data } = findId(animesCollection, mal_id)
              const slug = "anime"

              // console.log(`/${slug}/${mal_id}`);
              return (
                <li key={mal_id} className={styles.listItem}>
                  <Link href={`/${slug}/${mal_id}`} >
                    <div className="">
                      <SimpleCard id={mal_id} slug={slug} imageUrl={data.images.webp.large_image_url} title={data.title} />
                    </div>
                  </Link>

                  <button className={styles.removeButton} onClick={() => deleteId(favoriteCollection.mal_id, mal_id)}>
                    <MdFavorite />
                  </button>
                </li>
              )
            })
          }
        </div>
      </TemplatePage>
    )
  }


  return (
    <TemplatePage title="Profile" >
      <div className={styles.main}>
        <h1>loading</h1>
        {/* <p>Você precisa estar logado(a) para ver seu perfil.</p> */}
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
