import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CardCarousel from "../components/CardCarousel"
import Header from "../components/Header"


export default function Manga() {

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
          <h1>Top Mangas</h1>
          <CardCarousel opt="manga" url='https://api.jikan.moe/v4/top/manga' />
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
