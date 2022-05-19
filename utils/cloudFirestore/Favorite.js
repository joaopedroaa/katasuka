
// import {firebase, db} from "../firebase/clientApp"
import { db } from "../../firebase/clientApp"
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useState } from 'react';
import { User } from 'firebase/auth'


const WriteFavorites = async (userId, mal_id) => {
  try {
    const userDoc = doc(db, "favorites", userId)
    await setDoc(userDoc, {
      mal_id
    })

  } catch (error) { console.log(error) }
}



const ReadFavorites = (userId) => {
  const [dt, setDt] = useState()

  const readData = async () => {
    try {
      const userDoc = doc(db, "favorites", userId)
      const data = await getDoc(userDoc).then((doc) => {
        if (doc.exists()) {
          // console.log("doc.data()");

          setDt(doc.data())
          // return doc.data()
        }
      })


      // console.log(dt);
      // console.log('Data was successfully fetched from cloud firestore! Close this alert and check console for output.')
      // return data

    } catch (error) {
      console.log("error")
    }
  }

  readData()
  // console.log(result);
  // const aa = await getDoc(userDoc).then((doc) => doc.data())
  // console.log(aa.value);
  // return result

}



export { WriteFavorites, ReadFavorites }
