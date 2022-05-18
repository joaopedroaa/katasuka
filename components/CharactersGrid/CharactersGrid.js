/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'

import styles from './CharactersGrid.module.scss'

// import CardCarousel from "../components/CardCarousel"
// import Header from "../  /components/Header"
// import Footer from "../components/Footer"
import CardGrid from "../CardGrid"
import CardCarousel from "../CardCarousel"
import { useState, useEffect } from 'react';
import useStats from "../../utils/useStats"


export default function CharactersGrid({ id, slug }) {
  const [search, setSearch] = useState();

  const { stats, loading, error } = useStats(`https://api.jikan.moe/v4/${slug}/${id}/characters`);

  if (loading) return <p>Loading Characters...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <div className={styles.section}>
        {stats.data.slice(0, 4).map((char) => {
          const character = char.character
            return (
              <a href={character.url} className={styles.grid} key={character.name} >
                <img src={character.images.webp.image_url} alt={character.name} />
                <p>{character.name} </p>
              </a>
            )
        })}
      </div>
    </div>
  )
}

