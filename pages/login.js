import Link from 'next/link'
import styles from '../styles/AnimeHome.module.scss'
import TemplatePage from "../components/TemplatePage"
import FirebaseAuth from "../components/FirebaseAuth"
import config from "../data/config.json"

const FourOhFour = () => {
  return (
    <TemplatePage title="Login" description={`Algo de errado não está certo, tente outro link`}>
      <FirebaseAuth/>
    </TemplatePage>
  )


}
export default FourOhFour
