/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

import styles from '../../styles/Details.module.scss'
import stylesHome from '../../styles/AnimeHome.module.scss'

import episodes from "../../data/episodes"


import CardCarousel from "../../components/CardCarousel"
import DetailsEpisodes from "../../components/DetailsEpisodes"
import DetailsInfoCard from "../../components/DetailsInfoCard"
import TemplatePage from "../../components/TemplatePage"




export const getServerSideProps = async (context) => {
  const { id } = context.query
  const res = await fetch("https://api.jikan.moe/v4/anime/" + id)
  const data = await res.json()


  // favoriteCollection.mal_id.forEach((animeId) => {
  //   const animePos = findId(animesCollection, animeId)
  //   if (animePos == undefined) {
  //     console.log("dwd" + findId(animesCollection, animeId));
  //   }
  //   console.log(findId(animesCollection, animeId));

  //   // const { id, data } = findId(animesCollection, anime_id)
  // });

  return {
    props: { anime: data.data },
  }
}


const AnimeDetails = ({ anime }) => {
  const fromDate = anime.aired.prop.from
  const toDate = anime.aired.prop.to

  const fromDateString = `${fromDate.day}/${fromDate.month}/${fromDate.year}`
  const toDateString = `${toDate.day}/${toDate.month}/${toDate.year}`

  return (
    <TemplatePage title={`${anime.title}`} description={anime.synopsis} image={anime.images.webp.large_image_url}>
      <DetailsInfoCard slug="anime" anime={anime} />

      <main className={styles.mainContainer}>

        {!episodes[anime.mal_id] &&
          <div className={styles.mainContainerEpisodes}>
            <iframe src={anime.trailer.embed_url} frameBorder="0" width={1280} height={720} className={styles.videoIframe}></iframe>
          </div>}

        {episodes[anime.mal_id] &&
          <div className={styles.mainContainerEpisodes}>
            <DetailsEpisodes id={anime.mal_id} duration={anime.duration} />
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
    </TemplatePage>
  )
}
export default AnimeDetails
