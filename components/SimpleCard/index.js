import Image from 'next/image'
import styles from './SimpleCard.module.scss'
import episodes from "../../data/episodes"
import synopsisResume from "../../utils/synopsisResume"
import SteamEffect from '../SteamEffect'


export default function SimpleCard({ id, slug, imageUrl, title, rating, infoRight, infoLeft }) {
  return (
    <div className={`${styles.card}
      ${episodes[id] || slug == "manga" ?
        styles.cardOk :
        styles.cardNotFound}`
    }>
      <div className={styles.cardImage}>
        <SteamEffect src={imageUrl} />
        <p lassName={styles.rating}>{rating}</p>
      </div>


      <div className={`${styles.cardInfos} ${infoRight || infoLeft || slug == "manga" ? styles.cardInfosDetails : styles.cardInfosOnlyName}`}>
        <h2>{synopsisResume(title, 53)}</h2>
        <div className={styles.cardFooter}>
          <p className={styles.infoRight}>{infoRight}</p>
          <p className={styles.infoLeft}>{infoLeft}</p>
        </div>
      </div>
    </div>
  )
}
