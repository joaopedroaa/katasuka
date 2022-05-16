import Head from 'next/head'
import styles from '../../styles/AnimeDetails.module.scss'
import stylesHome from '../../styles/AnimeHome.module.scss'

import CardCarousel from "../../components/CardCarousel"
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DetailsInfoCard from '../../components/DetailsInfoCard';


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
      <Head>
        <title>Katasuka - {anime.title}</title>
        <meta name="description" content={anime.synopsis} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>

        <DetailsInfoCard slug="manga" anime={anime} />

        <div className={stylesHome.section}>
          <h2 className={stylesHome.subtitle}>Recommendations</h2>
          <CardCarousel slug="manga" opt="recomend" url={`https://api.jikan.moe/v4/manga/${anime.mal_id}/recommendations`} />
        </div>
      </div>
      {/* <Footer/> */}
    </>
  )



}
