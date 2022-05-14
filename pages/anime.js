import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CardCarousel from "../components/CardCarousel"
import Header from "../components/Header"


export default function Anime() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Katasuka</title>
        <meta name="description" content="Katasuka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Katasuka
        </h1>

        <div className={styles.section}>
          <h1>Top Season</h1>
          <CardCarousel url='https://api.jikan.moe/v4/seasons/now' />
        </div>

        <div className={styles.section}>
          <h1>Top Animes</h1>
          <CardCarousel url='https://api.jikan.moe/v4/top/anime' />
        </div>



      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer">
          Powered by Katasuka
        </a>
      </footer>
    </div>
  )
}
