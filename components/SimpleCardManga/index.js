/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styles from './SimpleCardManga.module.scss'

export default function SimpleCardManga({ imageUrl, title, score, year }) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title}/>
      <div className={styles.cardInfos}>
        <h2>{title}</h2>
        <div className={styles.cardFooter}>
          <p className={styles.cardScore}>{score}</p>
          <p className={styles.cardYear}>{year}</p>
        </div>
      </div>
    </div>
  )
}
