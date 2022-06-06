import Link from 'next/link';
import useEmblaCarousel from "embla-carousel-react";
import SimpleCard from "../SimpleCard"
import SimpleCardSkeleton from "../SimpleCard/SimpleCardSkeleton"

import useStats from "../../utils/useStats"
import styles from './CardCarousel.module.scss'

import episodes from "../../config/episodes"

const CardCarousel = ({ url, filterAnime, slug, opt }) => {
  const { stats, loading, error } = useStats(url);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps"
  })


  if (error) return <p>Error...</p>;

  if (loading) return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} >
        <div className={styles.embla__container}>
          <div className={styles.gridSlide}><SimpleCardSkeleton /> </div>
          <div className={styles.gridSlide}><SimpleCardSkeleton /> </div>
          <div className={styles.gridSlide}><SimpleCardSkeleton /> </div>
          <div className={styles.gridSlide}><SimpleCardSkeleton /> </div>
          <div className={styles.gridSlide}><SimpleCardSkeleton /> </div>
          <div className={styles.gridSlide}><SimpleCardSkeleton /> </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {stats.data.map((anime) => {
            if (opt == "recomend") anime = anime.entry
            if (!episodes[anime.mal_id] && filterAnime) return (<></>)
            return (
              <div key={anime.mal_id} className={styles.gridSlide}  >
                <Link href={`/${slug}/${anime.mal_id}`}  >
                  <a>
                    {opt == "recomend" && <SimpleCard
                      id={anime.mal_id}
                      slug={slug}
                      imageUrl={anime.images.webp.large_image_url}
                      title={anime.title}
                    />}

                    {opt == "default" && <SimpleCard
                      id={anime.mal_id}
                      slug={slug}
                      imageUrl={anime.images.webp.large_image_url}
                      title={anime.title}
                      infoRight={anime.type}
                      infoLeft={slug == "manga" ?
                        anime.volumes :
                        `${anime.episodes} Eps`}
                      filterAnime={filterAnime}
                    />}
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CardCarousel;
