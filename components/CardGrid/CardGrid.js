import Link from 'next/link'
import useStats from "../../utils/useStats"
import episodes from "../../data/episodes"
import SimpleCard from "../../components/SimpleCard"
import SimpleCardSkeleton from "../../components/SimpleCard/SimpleCardSkeleton"


const CardGrid = ({ opt, url, filterAnime }) => {
  const { stats, loading, error } = useStats(url);

  if (error) return <p>Error...</p>;
  if (loading) return (
    <>
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
    </>

  )

  // <div className={styles.grid} key={anime.mal_id} >
  // </div>
  return (
    <>
      {stats.data.map((anime) => {
        if (!episodes[anime.mal_id] && filterAnime) return (<></>)
        return (
          <Link  href={`/${opt}/${anime.mal_id}`} key={anime.mal_id}   >
            <a>
              {opt == "anime" && <SimpleCard id={anime.mal_id} imageUrl={anime.images.webp.large_image_url} title={anime.title} score={anime.score} year={anime.year} />}
              {opt == "manga" && <SimpleCard id={anime.mal_id} imageUrl={anime.images.webp.large_image_url} title={anime.title} score={anime.score} year={anime.year} />}
            </a>
          </Link>
        )
      })}
    </>

  )
}
export default CardGrid
