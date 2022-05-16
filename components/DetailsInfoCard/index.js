/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

import styles from './DetailsInfoCard.module.scss'
// import stylesHome from '../../styles/AnimeHome.module.scss'

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


export default function DetailsInfoCard({ slug, anime }) {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoCardImage}>
        <SteamEffect src={anime.images.webp.large_image_url} className={styles.SteamEffect} />
      </div>

      <div className={styles.infoCardText}>
        <div className={styles.infoCardTextHeader}>
          <div className="">
            <h1 className={styles.title}> {anime.title} </h1>
            <h2 className={styles.year}>{anime.year} </h2>
          </div>
          {!episodes[anime.mal_id] && <CharactersGrid slug={slug} id={anime.mal_id} />}
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

  )
}
