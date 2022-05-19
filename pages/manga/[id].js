import Head from 'next/head'
import styles from '../../styles/Details.module.scss'
import stylesHome from '../../styles/AnimeHome.module.scss'

import CardCarousel from "../../components/CardCarousel"
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DetailsInfoCard from '../../components/DetailsInfoCard';
import { useState, useEffect } from 'react';


export const getServerSideProps = async (context) => {
  const { id } = context.query
  const res = await fetch("https://api.jikan.moe/v4/manga/" + id)
  const data = await res.json()

  return {
    props: { anime: data.data },
  }
}


const MangaDetails = ({ anime }) => {
  const fromDate = anime.published.prop.from
  const toDate = anime.published.prop.to
  const fromDateString = `${fromDate.day}/${fromDate.month}/${fromDate.year}`
  const toDateString = `${toDate.day}/${toDate.month}/${toDate.year}`

  const newTitle = anime.title.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
  const urlManga = `https://unionleitor.top/leitor/${newTitle}/01`


  const [full, setFull] = useState(false);
  const displayFull = { display: full ? "none" : "block" };


  return (
    <>
      <Head >
        <title>Katasuka - {anime.title}</title>
        <meta name="description" content={anime.synopsis} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={displayFull}>
        <Header />
      </div>

      <div>
        <div style={displayFull}>
          <DetailsInfoCard slug="manga" anime={anime} />
        </div>

        <main className={`${full ? styles.mainContainerFull : styles.mainContainer}`}>
          <div className={styles.iframeSection}>
            <iframe className={`${styles.iframeManga} ${full ? styles.iframeMangaFull : styles.iframeMangaNormal}`} src={urlManga} frameBorder="0"></iframe>
            <button className={`${styles.iframeMangaButton} ${full ? styles.iframeMangaButtonFull : styles.iframeMangaButtonNormal}`} onClick={() => { setFull(!full) }}>Full Screan</button>
          </div>

          <div style={displayFull} className={`${styles.sidebar}`}>
            {anime.status && <>
              <h3>Status</h3>
              <p>{anime.status}</p>
            </>}

            {anime.score && <>
              <h3 >Score</h3>
              <p>{anime.score}</p>
            </>}

            {anime.volumes && <>
              <h3 >Volumes</h3>
              <p>{anime.volumes}</p>
            </>}
            {anime.chapters && <>
              <h3 >Chapters</h3>
              <p>{anime.chapters}</p>
            </>}

            {anime.popularity && <>
              <h3 >Popularity</h3>
              <p>{anime.popularity}</p>
            </>}

            {anime.type && <>
              <h3 >Type</h3>
              <p>{anime.type}</p>
            </>}

            {anime.published.prop.from.day && <>
              <h3>Start Date</h3>
              <p>{fromDateString}</p>
            </>}

            {anime.published.prop.to.day && <>
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

            {anime.authors.length != 0 && <>
              <h3>Authors</h3>
              {anime.authors.map((producer) => {
                return (<p key={producer.mal_id}>{producer.name}</p>)
              })}
            </>}

            {anime.serializations.length != 0 && <>
              <h3>Serializations</h3>
              {anime.serializations.map((producer) => {
                return (<p key={producer.mal_id}>{producer.name}</p>)
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


        <div style={displayFull} className={stylesHome.section}>
          <h2 className={stylesHome.subtitle}>Recommendations</h2>
          <CardCarousel slug="manga" opt="recomend" url={`https://api.jikan.moe/v4/manga/${anime.mal_id}/recommendations`} />
          <Footer />
        </div>
      </div>
    </>
  )
}
export default MangaDetails
