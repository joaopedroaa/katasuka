import styles from './SimpleCard.module.scss'
import episodes from "../../data/episodes"
import synopsisResume from "../../utils/synopsisResume"
import SteamEffect from '../SteamEffect'

const SimpleCard = ({ id, slug, imageUrl, title, rating, infoRight, infoLeft }) => {
  return (
    <div className={`${styles.card}
      ${episodes[id] || slug == "manga" ?
        styles.cardOk :
        styles.cardNotFound}`
    }>
      {/* <p className={styles.rating}>{rating}</p> */}
      <div className={styles.cardImage}>
        <SteamEffect src={imageUrl} />
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
export default SimpleCard
