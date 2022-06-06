import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/AnimeHome.module.scss";
import stylesSearch from "../components/Search/Search.module.scss";

import CardCarousel from "../components/CardCarousel";
import TemplatePage from "../components/TemplatePage";
import Search from "../components/Search";
import Switch from "react-switch";
import { MdSearch } from "react-icons/md";
import { getUserFromCookie } from "../firebase/handleCookies";

const AnimePage = () => {
  const [filterAnime, setChecked] = useState(false);
  const [search, setSearch] = useState();
  const [searchUrl, setSearchUrl] = useState();
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  // getUserFromCookie()
  // console.log(ss);

  return (
    <TemplatePage title="Animes" type="anime">
      {/* <div className={`${styles.bannerImage} ${styles.parallax} ${styles.bannerAnime}`}>

      </div> */}
      <main className={styles.main}>
        <div className={styles.section}>
          <div className={`${styles.headerSearch} ${styles.bannerAnime}`}>
            <div className={styles.headerSearchLeft}></div>

            <div className={styles.headerSearchCenter}>
              <h1 className={styles.title}>Katasuka</h1>
            </div>

            <div className={styles.headerSearchRight}>
              {/* <input
                type="text"
                name="name"
                className={stylesSearch.searchText}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />

              <button
                onClick={() => {
                  setSearchUrl(`https://api.jikan.moe/v4/anime?q=${search}`);
                }}
                className={stylesSearch.searchButton}
              >
                <MdSearch />
              </button> */}
            </div>
          </div>
        </div>






        <div className={styles.section}>
          <Switch
            onChange={handleChange}
            checked={filterAnime}
            className="react-switch"
            onColor="#A5E1AD"
            onHandleColor="#A5E1AD"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 0 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 0 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            id="material-switch"
          />
        </div>

        <div className={styles.section}>
          {searchUrl && <h2 className={styles.subtitle}>Resultados da pesquisa</h2>}
          {searchUrl && <CardCarousel slug="anime" opt="default" url={searchUrl} filterAnime={filterAnime} />}
        </div>

        <div className={styles.section}>
          <Link href="/anime/season">
            <h2 className={styles.subtitleLink}>Top Season</h2>
          </Link>
          <CardCarousel slug="anime" opt="default" url='https://api.jikan.moe/v4/seasons/now' filterAnime={filterAnime} />
        </div>


        <div className={styles.section}>
          <Link href="/anime/top">
            <h2 className={styles.subtitleLink}>Top Animes</h2>
          </Link>
          <CardCarousel slug="anime" opt="default" url='https://api.jikan.moe/v4/top/anime' filterAnime={filterAnime} />
        </div>
      </main>
    </TemplatePage>
  );
};
export default AnimePage;
