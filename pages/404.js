import Link from 'next/link'
import Header from "../components/Header"
import styles from '../styles/Home.module.css'

export default function FourOhFour() {
  return <>
    <Header />
    <div className={styles.FourOhFour}>
      <h1>Not Found  ¯\_(ツ)_/¯</h1>
    </div>
  </>
}
