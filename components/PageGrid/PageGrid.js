import { useState } from "react";
import Head from 'next/head'
import styles from '../../styles/AnimeHome.module.scss'


import TemplatePage from "../../components/TemplatePage"
import CardGrid from "../../components/CardGrid"

import Switch from "react-switch";


const PageGrid = ({ name, url }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([1]);

  const [filterAnime, setChecked] = useState(false);
  const handleChange = nextChecked => { setChecked(nextChecked); };


  return (
    <TemplatePage title={`Katasuka - ${name}`} description={"Katasuka"}>
      <main className={styles.main}>
        <h1 className={styles.title}>Katasuka</h1>

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
          <div className={styles.grid}>
            {pages.map((page) => (
              <CardGrid key={page} opt="anime" url={`${url}?page=${page}`} filterAnime={filterAnime} />
            ))}
          </div>
        </div>

        <button onClick={() => (
          setCurrentPage(currentPage + 1) &
          setPages((oldPages) => [...oldPages, currentPage + 1])
        )} className={styles.loadMoreButton}>
          Load More
        </button>

      </main>
    </TemplatePage>

  )
}
export default PageGrid
