import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/AnimeHome.module.scss'

import CardCarousel from "../components/CardCarousel"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Search from "../components/Search"

export default function Anime() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Katasuka</title>
        <meta name="description" content="Katasuka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Katasuka
        </h1>

        <Search />

        <div className={styles.section}>
          <Link href="/anime/season">
            <h2 className={styles.subtitle}>Top Season</h2>
          </Link>
          <CardCarousel opt="anime" url='https://api.jikan.moe/v4/seasons/now' />
        </div>


        <div className={styles.section}>
          <Link href="/anime/top">
            <h2 className={styles.subtitle}>Top Animes</h2>
          </Link>
          <CardCarousel opt="anime" url='https://api.jikan.moe/v4/top/anime' />
        </div>


      </main>
      <Footer />
    </div>
  )
}
