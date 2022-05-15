import React, { useState, useEffect, useCallback } from "react";
import Link from 'next/link';
import useEmblaCarousel from "embla-carousel-react";
import SimpleCardAnime from "../SimpleCardAnime"
import SimpleCardManga from "../SimpleCardManga"
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

  if (loading) return <CardCarouselSkeleton/>;
  if (error) return <p>Error...</p>;

  // return <CardCarouselSkeleton/>;

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {stats.data.map((anime) => (
            <div className={styles.gridSlide} key={anime.mal_id} >
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
    </div>
  )
}

export default CardCarousel;
