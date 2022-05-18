/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

import styles from './DetailsInfoCard.module.scss'
// import stylesHome from '../../styles/AnimeHome.module.scss'

import synopsisResume from "../../utils/synopsisResume"
import episodes from "../../data/episodes"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SteamEffect from "../../components/SteamEffect"
import CharactersGrid from "../../components/CharactersGrid"

export default function DetailsInfoCard({ slug, anime }) {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoCardImage}>
        <SteamEffect src={anime.images.webp.large_image_url} className={styles.SteamEffect} />
      </div>

      <div className={styles.infoCardText}>
        <div className={styles.infoCardTextHeader}>
          <div >
            <p className={styles.demographics}>{anime.demographics && anime.demographics.map((demographic) => <span key={demographic.name}>{demographic.name}</span>) }</p>
            <h1 className={styles.title}> {anime.title} </h1>
            <h2 className={styles.year}>{anime.season} {anime.year} </h2>
          </div>
          <div >
            {!episodes[anime.mal_id] && <CharactersGrid slug={slug} id={anime.mal_id} />}
          </div>
        </div>

        <p className={styles.synopsis}>{synopsisResume(anime.synopsis || "", 1000)}</p>


        <div className={styles.spaceBetween}>
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
    </div>

  )
}
