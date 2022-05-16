import { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/AnimeHome.module.scss'
import stylesSearch from '../components/Search/Search.module.scss'

import CardCarousel from "../components/CardCarousel"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Search from "../components/Search"
import Switch from "react-switch";


export default function Anime() {
  const [filterAnime, setChecked] = useState(false);
  const [search, setSearch] = useState();
  const [searchUrl, setSearchUrl] = useState();
  const handleChange = nextChecked => { setChecked(nextChecked); };
  return (
    <div className={styles.container}>
      <Head>
        <title>Katasuka</title>
        <meta name="description" content="Katasuka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />


      <main className={styles.main}>



        <div className={styles.section}>
          <div className={styles.headerSearch}>
            <div className={styles.headerSearchLeft}>
              <Switch
                onChange={handleChange}
                checked={filterAnime}
                className="react-switch"
                onColor="#A5E1AD"
                onHandleColor="#A5E1AD"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 0 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 0 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                id="material-switch"
              />
            </div>


            <h1 className={styles.title}>
              Katasuka
            </h1>


            <div className={styles.headerSearchRight}>
              <input type="text" name="name" className={stylesSearch.searchText} onChange={(event) => { setSearch(event.target.value) }} />
              <button onClick={() => { setSearchUrl(`https://api.jikan.moe/v4/anime?q=${search}`) }} className={stylesSearch.searchButton}>Search</button>
            </div>
          </div>
        </div>


        <div className={styles.section}>
          {searchUrl && <h2 className={styles.subtitle}>Search result</h2>}
          {searchUrl && <CardCarousel slug="anime" opt="default" url={searchUrl} filterAnime={filterAnime} />}
        </div>

        <div className={styles.section}>
          <Link href="/anime/season">
            <h2 className={styles.subtitleLink}>Top Season</h2>
          </Link>
          <CardCarousel slug="anime" opt="default" url='https://api.jikan.moe/v4/seasons/now' filterAnime={filterAnime} />
        </div>


        <div className={styles.section}>
          <Link href="/anime/top">
            <h2 className={styles.subtitleLink}>Top Animes</h2>
          </Link>
          <CardCarousel slug="anime" opt="default" url='https://api.jikan.moe/v4/top/anime' filterAnime={filterAnime} />
        </div>


      </main>
      <Footer />
    </div>
  )
}
