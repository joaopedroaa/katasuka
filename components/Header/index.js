/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header({ children }) {
  console.log(children)
  return (
    <>
      <header className={styles.header}>
        <input
          className={styles.controlNavCheckbox}
          type="checkbox"
          id="control-nav"
        />
        <label className={styles.controlNav} htmlFor="control-nav" />
        <label className={styles.controlNavClose} htmlFor="control-nav" />

        <nav>
          <Link href="/anime">Anime</Link>
          <Link href="/manga">Manga</Link>
        </nav>

        {children}
      </header>

    </>
  );
}
