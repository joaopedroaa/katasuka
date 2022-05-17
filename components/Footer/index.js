import styles from './Footer.module.scss'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function Footer() {
  const { theme, setTheme } = useTheme()
  return (
    <footer className={styles.footer}>

      <div className={styles.dmca}><Link href={`/about/dmca`}>DMCA</Link></div>
      <span></span>
      <div className={styles.themes}>
        <select>
          <option onClick={() => setTheme('light')}>Aether</option>
          <option onClick={() => setTheme('dark')}>Erebus</option>
          <option onClick={() => setTheme('light-blue')}>Proteus</option>
          <option onClick={() => setTheme('light-pink')}>Chloris</option>
          {/* <option onClick={() => setTheme('light')}>Phoebe</option> */}
        </select>
      </div>
    </footer>
  )
}
