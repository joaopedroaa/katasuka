/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

import styles from '../../styles/AnimeDetails.module.scss'
import synopsisResume from "../../utils/synopsisResume"
import episodes from "../../utils/episodes"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SteamEffect from "../../components/SteamEffect"
import CardCarousel from "../../components/CardCarousel"
import EpisodesList from "../../components/EpisodesList"
import CharactersGrid from "../../components/CharactersGrid"

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
        <div className={styles.imageAndTitleSection}>
          <SteamEffect src={anime.images.webp.large_image_url} className={styles.SteamEffect} />
          {/* <img src={anime.images.webp.large_image_url} alt="" className={styles.image} /> */}
          <div className={styles.titleSection}>
            <div className={styles.titleAndScoreSection}>
              <div className="">

                <h1 className={styles.title}> {anime.title} </h1>
                <h2 className={styles.year}>{anime.year} </h2>
              </div>
              {!episodes[anime.mal_id] && <CharactersGrid id={anime.mal_id} />}
            </div>

            <p className={styles.synopsis}>{synopsisResume(anime.synopsis, 1000)}</p>

            <div className={styles.genre}>
              {anime.genres.map((genre) => {
                return (
                  <a key={genre.mal_id} href={genre.url}>
                    <span >{genre.name}</span>
                  </a>
                )
              })}
            </div>

          </div>
        </div>

        {episodes[anime.mal_id] &&
          <main className={styles.main}>
            <EpisodesList id={anime.mal_id} />
          </main>}


        <div className={styles.recommendation}>
          <CardCarousel opt="recommendation" url={`https://api.jikan.moe/v4/anime/${anime.mal_id}/recommendations`} />
        </div>
      </div>

      {/* <Footer /> */}

    </>
  )
}
