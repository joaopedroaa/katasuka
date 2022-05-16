import styles from './Footer.module.scss'
import { useTheme } from 'next-themes'

export default function Footer() {
  const { theme, setTheme } = useTheme()
  return (
    <footer className={styles.footer}>
      <span></span>
      <span>Não hospedamos nenhum vídeo em nosso servidor. O conteudo deste site é provido por terceiros que não possuem qualquer afiliação conosco.</span>

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
