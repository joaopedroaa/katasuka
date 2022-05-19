import Link from 'next/link'
import styles from '../styles/AnimeHome.module.scss'
import TemplatePage from "../components/TemplatePage"

const FourOhFour = () => {
  return (
    <TemplatePage title="Login" description={`Algo de errado não está certo, tente outro link`}>
      <div className={styles.FourOhFour}>
        <h1>Not Found  ¯\_(ツ)_/¯</h1>
      </div>
    </TemplatePage>
  )


}
export default FourOhFour
