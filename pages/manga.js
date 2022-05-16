import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/AnimeHome.module.scss'
import CardCarousel from "../components/CardCarousel"
import Header from "../components/Header"
import Footer from "../components/Footer"


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
        <h1 className={styles.title}>Katasuka</h1>

        <div className={styles.section}>

          <Link href="/manga/top">
            <h2 className={styles.subtitle}>Top Mangas</h2>
          </Link>
          <CardCarousel opt="manga" url='https://api.jikan.moe/v4/top/manga' />
        </div>

      </main>

      <Footer/>
    </div>
  )
}
