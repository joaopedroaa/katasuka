import Image from 'next/image'
import styles from './SimpleCard.module.scss'
import episodes from "../../utils/episodes"
import synopsisResume from "../../utils/synopsisResume"
import SteamEffect from '../SteamEffect'


export default function SimpleCard({ id, imageUrl, title, infoRight, infoLeft }) {
  return (
    <div className={`${styles.card} ${episodes[id] ? styles.cardOk : styles.cardNotFound}`}>
      <SteamEffect src={imageUrl}/>
      {/* <img src={imageUrl} alt={title} className={styles.Image} /> */}
      <div className={styles.cardInfos}>
        <h2>{synopsisResume(title, 56)}</h2>
        <div className={styles.cardFooter}>
          <p className={styles.infoRight}>{infoRight}</p>
          <p className={styles.infoLeft}>{infoLeft}</p>
        </div>
      </div>
    </div>
  )
}
