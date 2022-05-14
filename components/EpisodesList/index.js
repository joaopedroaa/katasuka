import React, { useState, useEffect, useCallback } from "react";

import useStats from "../../utils/useStats"
import episodes from "../../utils/episodes"

import styles from './EpisodesList.module.scss'

import EpisodesListSkeleton from "../EpisodesListSkeleton"

const EpisodesList = ({ id }) => {
  const { stats, loading, error } = useStats(`https://api.jikan.moe/v4/anime/${id}/episodes`);
  if (error) return <p>Error...</p>;
  if (loading) return (
    <ul className={styles.ulEpisodes}>
      <EpisodesListSkeleton/>
      <EpisodesListSkeleton/>
      <EpisodesListSkeleton/>
      <EpisodesListSkeleton/>
      <EpisodesListSkeleton/>
    </ul>
  );
  if (episodes[id]) {
    const episodesUrl = episodes[id].url
    return (
      <ul className={styles.ulEpisodes}>
        {stats.data && stats.data.map((anime) => (
          <a href={episodesUrl + anime.mal_id + ".mp4"} key={anime.mal_id} target="_blank" rel="noreferrer" className={styles.liEpisodes} >
            {anime.mal_id} - {anime.title}
          </a>
        ))}
        {console.log(stats.data.length == 0)}
        {stats.data.length == 0 &&
          <a href={episodesUrl + "1.mp4"}target="_blank" rel="noreferrer" className={styles.liEpisodes} >
            1 - Watch
          </a>}
      </ul>
    )
  }

  return (
    <ul className={styles.ulEpisodes}>
      {stats.data.map((anime) => (
        <a key={anime.mal_id} target="_blank" rel="noreferrer" className={styles.liEpisodes} >
          {anime.mal_id} - {anime.title}
        </a>
      ))}
    </ul>
  )


}
export default EpisodesList
