import Image from 'next/image'
import styles from './SimpleCardAnime.module.scss'
import episodes from "../../utils/episodes"



export default function SimpleCardAnime({ id, imageUrl, title, score, year }) {

  return (
    <div className={`${styles.card} ${episodes[id] ? styles.cardok : styles.cardnotfound}`}>
      <img src={imageUrl} alt={title} className={styles.Image}/>
      <div className={styles.cardInfos}>
        <h2>{title}</h2>
          {/* {episodes[id] && <p>Play</p>} */}
        <div className={styles.cardFooter}>
          <p className={styles.cardScore}>{score}</p>
          <p className={styles.cardYear}>{year}</p>
        </div>
      </div>
    </div>
  )
}
