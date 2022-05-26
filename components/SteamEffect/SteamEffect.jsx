import styles from './steamEffect.module.scss'

const card = ({ src }) => {
  var sectionStyle = {
    backgroundImage: `url(${src})`
  }

  return (
    <div className={styles.gamecard}>
      <div className={styles.gamecardcover} style={sectionStyle}></div>
    </div>

  )
}

export default card
