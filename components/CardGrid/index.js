import Head from 'next/head'
import styles from './CardGrid.module.scss'
import CardCarousel from "../../components/CardCarousel"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SimpleCard from "../../components/SimpleCard"
import SimpleCardSkeleton from "../../components/SimpleCardSkeleton"
import Link from 'next/link'
import useStats from "../../utils/useStats"

export default function CardGrid({ opt, url }) {

  const { stats, loading, error } = useStats(url);

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
                {opt == "anime" && <SimpleCard id={anime.mal_id} imageUrl={anime.images.webp.large_image_url} title={anime.title} score={anime.score} year={anime.year} />}
                {opt == "manga" && <SimpleCard id={anime.mal_id} imageUrl={anime.images.webp.large_image_url} title={anime.title} score={anime.score} year={anime.year} />}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
