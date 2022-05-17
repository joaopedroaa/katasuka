import React, { useState, useEffect, useCallback } from "react";
import Link from 'next/link';
import useEmblaCarousel from "embla-carousel-react";
import SimpleCard from "../SimpleCard"

import useStats from "../../utils/useStats"
import styles from './CardCarousel.module.scss'
import CardCarouselSkeleton from "../CardCarouselSkeleton"

import episodes from "../../data/episodes"

const CardCarousel = ({ url, filterAnime, slug, opt }) => {
  const { stats, loading, error } = useStats(url);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps"
  })

  if (loading) return <CardCarouselSkeleton />;
  if (error) return <p>Error...</p>;

  // return <CardCarouselSkeleton/>;
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
                    {opt == "recomend" && <SimpleCard id={anime.mal_id} slug={slug} imageUrl={anime.images.webp.large_image_url} title={anime.title} rating={anime.rating} />}
                    {opt == "default" && <SimpleCard id={anime.mal_id} slug={slug} imageUrl={anime.images.webp.large_image_url} title={anime.title} rating={anime.rating} infoRight={anime.score} infoLeft={slug == "manga" ? anime.volumes : anime.episodes} filterAnime={filterAnime} />}
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
