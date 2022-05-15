import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/AnimeHome.module.css'
import {useStats} from "../../utils"

import CardCarousel from "../../components/CardCarousel"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SimpleCardAnime from "../../components/SimpleCardAnime"
import SimpleCardManga from "../../components/SimpleCardManga"
import CardGrid from "../../components/CardGrid"

export default function AnimeTop() {

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

        <CardGrid opt="anime" />
      </main>
      <Footer />
    </div>
  )
}
