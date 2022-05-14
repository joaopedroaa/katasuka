import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Anime.module.css'
import useStats from "../../utils/useStats"
import Link from 'next/link';
import episodes from '../../utils/episodes';
import CardCarouselRecommendation from "../../components/CardCarouselRecommendation"
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export const getServerSideProps = async (context) => {
  const { id } = context.query
  const res = await fetch("https://api.jikan.moe/v4/manga/" + id)
  const data = await res.json()

  return {
    props: { anime: data.data },
  }
}


export default function MangaDetails({ anime }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.imageAndTitleSection}>
          <img src={anime.images.webp.large_image_url} alt="" className={styles.image} />
          <div className={styles.titleSection}>
            <div className={styles.titleAndScoreSection}>
              <h1 className={styles.title}> {anime.title}</h1>
              <p className={styles.score}>{anime.score}</p>
            </div>

            <h2 className={styles.year}>{anime.year}</h2>
            <p className={styles.synopsis}>{anime.synopsis}</p>
            <div className={styles.genre}>
              {anime.genres.map((genre) => (
                <span key={genre.mal_id}>{genre.name}</span>
              ))}
            </div>
          </div>


        </div>
        <div className={styles.recommendation}>
          <h1>Recommendations</h1>
          <CardCarouselRecommendation opt="manga" url={`https://api.jikan.moe/v4/manga/${anime.mal_id}/recommendations`} />
        </div>
      </div>
      {/* <Footer/> */}
    </>
  )



}
