/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

import styles from '../../styles/AnimeDetails.module.scss'
import stylesHome from '../../styles/AnimeHome.module.scss'

import synopsisResume from "../../utils/synopsisResume"
import episodes from "../../utils/episodes"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SteamEffect from "../../components/SteamEffect"
import CardCarousel from "../../components/CardCarousel"
import EpisodesList from "../../components/EpisodesList"
import CharactersGrid from "../../components/CharactersGrid"
import DetailsInfoCard from "../../components/DetailsInfoCard"

export const getServerSideProps = async (context) => {
  const { id } = context.query
  const res = await fetch("https://api.jikan.moe/v4/anime/" + id)
  const data = await res.json()

  return {
    props: { anime: data.data },
  }
}


export default function AnimeDetails({ anime }) {

  return (
    <>
      <Head>
        <title>Katasuka - {anime.title}</title>
        <meta name="description" content={anime.synopsis} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className={styles.container}>

        <DetailsInfoCard slug="anime" anime={anime }/>



        {episodes[anime.mal_id] &&
          <main className={styles.main}>
            <EpisodesList id={anime.mal_id} />
          </main>}

        <div className={stylesHome.section}>
          <h2 className={stylesHome.subtitle}>Recommendations</h2>
          <CardCarousel slug="anime" opt="recomend" url={`https://api.jikan.moe/v4/anime/${anime.mal_id}/recommendations`} />
        </div>
      </div>

      {/* <Footer /> */}

    </>
  )
}
