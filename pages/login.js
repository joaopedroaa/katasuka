import Link from 'next/link'
import styles from '../styles/AnimeHome.module.scss'
import TemplatePage from "../components/TemplatePage"
import FirebaseAuth from "../components/FirebaseAuth"
import config from "../data/config.json"

const FourOhFour = () => {
  return (
    <TemplatePage title="Login" >
      <FirebaseAuth/>
    </TemplatePage>
  )


}
export default FourOhFour
