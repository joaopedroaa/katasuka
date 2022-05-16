import React, { useState, useEffect, useCallback } from "react";
import Link from 'next/link';
import useEmblaCarousel from "embla-carousel-react";
import SimpleCard from "../SimpleCard"

import useStats from "../../utils/useStats"
import styles from './CardCarousel.module.scss'
import CardCarouselSkeleton from "../CardCarouselSkeleton"

const CardCarousel = ({ url, opt }) => {
  const { stats, loading, error } = useStats(url);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps"
  })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [
    emblaApi
  ]);


  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  if (loading) return <CardCarouselSkeleton />;
  if (error) return <p>Error...</p>;

  // return <CardCarouselSkeleton/>;

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {stats.data.map((anime) => {
            return (
              <div key={anime.mal_id} className={styles.gridSlide}  >
                <Link href={`/${opt}/${anime.mal_id}`}  >
                  <a>

                    {opt == "anime" && <SimpleCard mal_id={anime.mal_id} imageUrl={anime.images.webp.large_image_url} title={anime.title} infoRight={anime.score} infoLeft={anime.episodes} />}
                    {opt == "manga" && <SimpleCard mal_id={anime.mal_id} imageUrl={anime.images.webp.large_image_url} title={anime.title} infoRight={anime.score} infoLeft={anime.chapters} />}
                    {opt == "recommendation" && <SimpleCard mal_id={anime.entry.mal_id} imageUrl={anime.entry.images.webp.large_image_url} title={anime.entry.title} infoRight={`${anime.votes} votes`} />}
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
