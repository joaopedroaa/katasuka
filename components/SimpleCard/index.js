import Image from 'next/image'
import styles from './simpleCard.module.scss'

export default function SimpleCard({ imageUrl, title, score, year }) {
  return (
    <div className={styles.card}>
      <Image src={imageUrl} alt={title} height="400px" width="0"/>
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
