/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

import styles from '../../styles/AnimeDetails.module.scss'
import stylesHome from '../../styles/AnimeHome.module.scss'

import synopsisResume from "../../utils/synopsisResume"
import episodes from "../../data/episodes"

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
  const fromDate = anime.aired.prop.from
  const toDate = anime.aired.prop.to

  const fromDateString = `${fromDate.day}/${fromDate.month}/${fromDate.year}`
  const toDateString = `${toDate.day}/${toDate.month}/${toDate.year}`


  return (
    <>
      <Head>
        <title>Katasuka - {anime.title}</title>
        <meta name="description" content={anime.synopsis} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Header />
        <DetailsInfoCard slug="anime" anime={anime} />

        <main className={styles.mainContainer}>

          {!episodes[anime.mal_id] &&
            <div className={styles.mainContainerEpisodes}>
              <iframe src={anime.trailer.embed_url} frameBorder="0" width={1280} height={720} className={styles.videoIframe}></iframe>
            </div>}

          {episodes[anime.mal_id] &&
            <div className={styles.mainContainerEpisodes}>
              <EpisodesList id={anime.mal_id} duration={anime.duration} />
            </div>}

          <div className={styles.sidebar}>
            {anime.status && <>
              <h3>Status</h3>
              <p>{anime.status}</p>
            </>}

            {anime.episodes && <>
              <h3 >Episodes</h3>
              <p>{anime.episodes}</p>
            </>}

            {anime.source && <>
              <h3 >Source</h3>
              <p>{anime.source}</p>
            </>}

            {anime.type && <>
              <h3 >Type</h3>
              <p>{anime.type}</p>
            </>}

            {anime.aired.prop.from.day && <>
              <h3>Start Date</h3>
              <p>{fromDateString}</p>
            </>}

            {anime.aired.prop.to.day && <>
              <h3>End Date</h3>
              <p>{toDateString}</p>
            </>}

            {anime.title_english && <>
              <h3 >English Title</h3>
              <p>{anime.title_english}</p>
            </>}

            {anime.title_japanese && <>
              <h3 >Japanese Title</h3>
              <p>{anime.title_japanese}</p>
            </>}

            {anime.title_synonyms.length != 0 && <>
              <h3 >Synonyms</h3>
              {anime.title_synonyms.map((synonym) => <p key={synonym}>{synonym}</p>)}
            </>}

            {anime.producers.length != 0 && <>
              <h3>Producers</h3>
              {anime.producers.map((producer) => {
                return (<p key={producer.mal_id}>{producer.name}</p>)
              })}
            </>}

            {anime.studios.length != 0 && <>
              <h3>Studios</h3>
              {anime.studios.map((studio) => {
                return (<p key={studio.mal_id}>{studio.name}</p>)
              })}
            </>}

            {anime.themes.length != 0 && <>
              <h3>Themes</h3>
              {anime.themes.map((theme) => {
                return (<p key={theme.mal_id}>{theme.name}</p>)
              })}
            </>}



          </div>
        </main>

        <div className={`${stylesHome.section} + ${stylesHome.sectionRecommendations}`}>
          <h2 className={stylesHome.subtitle}>Recommendations</h2>
          <CardCarousel slug="anime" opt="recomend" url={`https://api.jikan.moe/v4/anime/${anime.mal_id}/recommendations`} />
        </div>

        <Footer />
      </>


    </>
  )
}
