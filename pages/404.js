import Link from 'next/link'
import styles from '../styles/AnimeHome.module.scss'
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function FourOhFour() {
  return <>
    <Header />
    <div className={styles.FourOhFour}>
      <h1>Not Found  ¯\_(ツ)_/¯</h1>
    </div>
    <Footer />
  </>
}
