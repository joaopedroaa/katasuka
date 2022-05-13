import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useStats from "../utils/useStats"
import Link from 'next/link';


export default function Home() {
  const { stats, loading, error } = useStats('https://api.jikan.moe/v4/top/anime');
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Katasuka</title>
        <meta name="description" content="Katasuka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Katasuka
        </h1>


        <div className={styles.grid}>
          {stats.data.map((anime) => (
            <Link href={"/anime/" + anime.mal_id} key={anime.mal_id}>
              <div className={styles.card}>
                <img src={anime.images.webp.large_image_url} alt={anime.title} />
                <div className={styles.cardInfos}>
                  <h2>{anime.title}</h2>
                  <div className={styles.cardFooter}>
                    <p className={styles.cardScore}>{anime.score}</p>
                    <p className={styles.cardYear}>{anime.year}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
          }

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Katasuka

        </a>
      </footer>
    </div>
  )
}
