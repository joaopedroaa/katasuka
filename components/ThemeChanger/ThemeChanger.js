import styles from './ThemeChanger.module.scss'
import { useTheme } from 'next-themes'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  return (
    <select className={styles.themes}>
      <option onClick={() => setTheme('light')}>Aether</option>
      <option onClick={() => setTheme('dark')}>Erebus</option>
      <option onClick={() => setTheme('light-blue')}>Proteus</option>
      <option onClick={() => setTheme('light-pink')}>Chloris</option>
      {/* <option onClick={() => setTheme('light')}>Phoebe</option> */}
    </select>
  )
}
export default ThemeChanger
