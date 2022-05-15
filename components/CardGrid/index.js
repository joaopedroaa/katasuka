import Head from 'next/head'
import styles from './CardGrid.module.scss'
import CardCarousel from "../../components/CardCarousel"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SimpleCardAnime from "../../components/SimpleCardAnime"
import SimpleCardManga from "../../components/SimpleCardManga"
import SimpleCardSkeleton from "../../components/SimpleCardSkeleton"
import Link from 'next/link'
import useStats from "../../utils/useStats"

export default function CardGrid({ opt }) {

  const { stats, loading, error } = useStats("https://api.jikan.moe/v4/top/anime");

  if (error) return <p>Error...</p>;
  if (loading) return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.grid} >
          <SimpleCardSkeleton />
          <SimpleCardSkeleton />
          <SimpleCardSkeleton />
          <SimpleCardSkeleton />
          <SimpleCardSkeleton />
          <SimpleCardSkeleton />
          <SimpleCardSkeleton />
          <SimpleCardSkeleton />
          <SimpleCardSkeleton />
          <SimpleCardSkeleton />
        </div>
      </div>
    </div>
  )

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        {stats.data.map((anime) => (
          <div className={styles.grid} key={anime.mal_id} >
            <Link href={`/${opt}/${anime.mal_id}`}  >
              <a>
                {opt == "anime" && <SimpleCardAnime id={anime.mal_id} imageUrl={anime.images.webp.large_image_url} title={anime.title} score={anime.score} year={anime.year} />}
                {opt == "manga" && <SimpleCardManga id={anime.mal_id} imageUrl={anime.images.webp.large_image_url} title={anime.title} score={anime.score} year={anime.year} />}
              </a>
            </Link>
          </div>
        ))}
      </div>


    </div>
  )
}
