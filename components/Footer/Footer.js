import styles from './Footer.module.scss'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import ThemeChanger from '../ThemeChanger'

const Footer = () => {
  const { theme, setTheme } = useTheme()
  return (
    <footer className={styles.footer}>

      <div className={styles.dmca}><Link href={`/about/dmca`}>DMCA</Link></div>
      {/* <span></span> */}
      <ThemeChanger/>
    </footer>
  )
}
export default Footer
