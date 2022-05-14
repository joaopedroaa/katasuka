import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CardCarousel from "../components/CardCarousel"


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Katasuka</title>
        <meta name="description" content="Katasuka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Katasuka
        </h1>

        <div className={styles.section}>
          <h1>Top Mangas</h1>
          <CardCarousel url='https://api.jikan.moe/v4/top/manga' />
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
