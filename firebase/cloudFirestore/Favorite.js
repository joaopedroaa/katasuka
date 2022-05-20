
// import {firebase, db} from "../firebase/clientApp"
import { db } from "../../firebase/clientApp"
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useState } from 'react';
import { User } from 'firebase/auth'


const writeFavorites = async (userId, mal_id) => {
  try {
    const userDoc = doc(db, "favorites", userId)
    await setDoc(userDoc, {
      mal_id
    })
  } catch (error) { console.log(error) }
}


const writeAnimes = async (mal_id) => {
  const id = mal_id.toString()
  const getAnimeInfos = async (id) => {
    const res = await fetch("https://api.jikan.moe/v4/anime/" + id)
    const data = await res.json()
    return data.data
  }
  const data = await getAnimeInfos(id)
  try {
    const userDoc = doc(db, "animes", id)
    await setDoc(userDoc, {
      data
    })
  } catch (error) { console.log(error) }
  return data
}



const writeAnimesWithData = async (id, data) => {
  try {
    const userDoc = doc(db, "animes", id)
    await setDoc(userDoc, {
      data
    })
  } catch (error) { console.log(error) }
  return data
}






export { writeFavorites, writeAnimes, writeAnimesWithData }
