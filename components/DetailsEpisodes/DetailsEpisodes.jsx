
import React, { useState, useEffect, useCallback } from "react";

import useStats from "../../utils/useStats"
import episodes from "../../config/episodes"

import styles from './DetailsEpisodes.module.scss'

import DetailsEpisodesSkeleton from "./DetailsEpisodesSkeleton"

const DetailsEpisodes = ({ id, duration }) => {
  const { stats, loading, error } = useStats(`https://api.jikan.moe/v4/anime/${id}/episodes`);
  if (error) return <p>Error...</p>;
  if (loading) return (
    <ul className={styles.ulEpisodes}>
      <DetailsEpisodesSkeleton />
      <DetailsEpisodesSkeleton />
      <DetailsEpisodesSkeleton />
      <DetailsEpisodesSkeleton />
      <DetailsEpisodesSkeleton />
    </ul>
  );
  if (episodes[id]) {
    const episodesUrl = episodes[id].url
    return (
      <ul className={styles.ulEpisodes}>
        {stats.data && stats.data.map((anime) => (
          <a href={episodesUrl + anime.mal_id + ".mp4"} key={anime.mal_id} target="_blank" rel="noreferrer" className={styles.liEpisodes} >
            <span>{anime.mal_id} - {anime.title} </span>  <span>{duration}</span>
          </a>
        ))}

        {stats.data.length == 0 &&
          <a href={episodesUrl + "1.mp4"} target="_blank" rel="noreferrer" className={styles.liEpisodes} >
            1 - Watch
          </a>}

      </ul>
    )
  }

  return (
    <>
      <ul className={styles.ulEpisodes}>
        <h1>dwuhdu dw</h1>
        {stats.data.map((anime) => (
          <a key={anime.mal_id} target="_blank" rel="noreferrer" className={styles.liEpisodes} >
            {anime.mal_id} - {anime.title}
          </a>
        ))}
      </ul>
    </>
  )


}
export default DetailsEpisodes
