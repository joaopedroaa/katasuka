import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/AnimeHome.module.scss'
import CardCarousel from "../components/CardCarousel"
import Header from "../components/Header"
import Footer from "../components/Footer"


export default function Manga() {
  const siteUrl = "katasuka.vercel.app"
  return (
    <>
      <Head>
        <title>Katasuka</title>
        <meta name="description" content="Katasuka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Katasuka</h1>


        <div className={styles.dmca}>


          <h1>Legal Disclaimer</h1>
          <p>
            he author is not responsible for any contents linked or referred to from his pages - If any damage occurs by the use of information presented there, only the author of the respective pages might be liable, not the one who has linked to these pages. {siteUrl} doesn't host any content.
            <br /><br />
            All {siteUrl} does is link or embed content that was uploaded to popular Online Video hosting sites like Youtube.com / Google Video. All youtube/googlevideo users signed a contract with the sites when they set up their accounts which forces them not to upload illegal content. By clicking on any Links to videos while surfing on {siteUrl} you watch content hosted on third parties and {siteUrl} can't take the responsibility for any content hosted on other sites.
            <br /><br />
            We do not upload any videos nor do we know who and where videos are coming from. We do not promote any illegal conduct of any kind. Links to the videos are submitted by users and managed by users.
          </p>

          <h1>DMCA</h1>
          <p>
            We take copyright violation very seriously and will vigorously protect the rights of legal copyright owners. If you are the copyright owner of content which appears on the {siteUrl} website and you did not authorize the use of the content you must notify us in writing in order for us to identify the allegedly infringing content and take action.
            <br /><br />
            We will be unable to take any action if you do not provide us with the required information, so please fill out all fields accurately and completely. You may make a written notice via the contact form as listed below. Your written notice must include the following:
            <br /><br />
            1 - Specific identification of the copyrighted work which you are alleging to have been infringed. If you are alleging infringement of multiple copyrighted works with a single notification you must submit a representative list which specifically identifies each of the works that you allege are being infringed.
            <br /><br />
            2 - Specific identification of the location and description of the material that is claimed to be infringing or to be the subject of infringing activity with enough detailed information to permit us to locate the material. You should include the specific URL or URLs of the web pages where the allegedly infringing material is located.
            <br /><br />
            Written notice should be sent to joaopedro@disroot.org
          </p>

        </div>
      </main>

      <Footer />
    </>
  )
}
