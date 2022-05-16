import Head from 'next/head'
import Link from 'next/link'

import styles from './Search.module.scss'

// import CardCarousel from "../components/CardCarousel"
// import Header from "../  /components/Header"
// import Footer from "../components/Footer"
import CardGrid from "../CardGrid"
import CardCarousel from "../CardCarousel"
import { useState, useEffect } from 'react';


export default function Anime() {
  const [search, setSearch] = useState();
  const [type, setType] = useState();

  const [searchUrl, setSearchUrl] = useState();

  return (
    <div className={styles.container}>
      <Head>
        <title>Katasuka</title>
        <meta name="description" content="Katasuka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.section}>
          <input type="text" name="name" className={styles.searchText} onChange={(event) => { setSearch(event.target.value) }} />
          <button onClick={() => { setSearchUrl(`https://api.jikan.moe/v4/anime?q=${search}`) }} className={styles.searchButton}>Search</button>
        </div>

        {searchUrl && <CardCarousel slug="anime" url={searchUrl} />}
      </main>

    </div>
  )
}






{/* <select onChange={(event) => { setType(event.target.value) }} >
            <option value=""></option>
            <option value="tv">tv</option>
            <option value="movie">movie</option>
            <option value="ova">ova</option>
            <option value="ona">ona</option>
            <option value="special">special</option>
          </select> */}

{/* <select onChange={(event) => { setMin_score(event.target.value) }} >
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">4</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>

            <select onChange={(event) => { setMax_score(event.target.value) }} >
              <option value="1">1</option>
              <option value="3">2</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option selected value="10">10</option>
            </select> */}
