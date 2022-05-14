import React, { useState, useEffect, useCallback } from "react";

import useStats from "../../utils/useStats"
import episodes from "../../utils/episodes"

import styles from './EpisodesList.module.scss'

const EpisodesList = ({ id }) => {
  const { stats, loading, error } = useStats(`https://api.jikan.moe/v4/anime/${id}/episodes`);
  if (loading) return <p>Loadi...</p>;
  if (error) return <p>Error...</p>;
  if (episodes[id]) {
    const episodesUrl = episodes[id].url

    return (
      <ul className={styles.ulEpisodes}>
        {stats.data.map((anime) => (
          <a href={episodesUrl + anime.mal_id + ".mp4"} key={anime.mal_id} target="_blank" rel="noreferrer" className={styles.liEpisodes} >
            {anime.mal_id} - {anime.title}
          </a>
        ))}
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
