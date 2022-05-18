import { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link';

import styles from '../styles/AnimeHome.module.scss'
import stylesSearch from '../components/Search/Search.module.scss'

import CardCarousel from "../components/CardCarousel"
import TemplatePage from "../components/TemplatePage"
import Switch from "react-switch";


const MangaPage = () => {
  const [filterAnime, setChecked] = useState(false);
  const [search, setSearch] = useState();
  const [searchUrl, setSearchUrl] = useState();
  const handleChange = nextChecked => { setChecked(nextChecked); };

  return (
    <TemplatePage title="Katasuka - Mangas" description="Katasuka" >
      <main className={styles.main}>
        <div className={styles.section}>
          <div className={styles.headerSearch}>
            <div className={styles.headerSearchLeft}></div>
            <h1 className={styles.title}>
              Katasuka
            </h1>
            <div className={styles.headerSearchRight}>
              <input type="text" name="name" className={stylesSearch.searchText} onChange={(event) => { setSearch(event.target.value) }} />
              <button onClick={() => { setSearchUrl(`https://api.jikan.moe/v4/manga?q=${search}`) }} className={stylesSearch.searchButton}>Search</button>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          {searchUrl && <h2 className={styles.subtitle}>Search result</h2>}
          {searchUrl && <CardCarousel slug="manga" opt="default" url={searchUrl} filterAnime={filterAnime} />}
        </div>

        <div className={styles.section}>
          <Link href="/manga/top">
            <h2 className={styles.subtitleLink}>Top Mangas</h2>
          </Link>
          <CardCarousel slug="manga" opt="default" url='https://api.jikan.moe/v4/top/manga' />
        </div>

      </main>

    </TemplatePage>
  )
}
export default MangaPage
