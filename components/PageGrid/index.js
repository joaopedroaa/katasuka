import React, { useState, useEffect, useCallback } from "react";
import Head from 'next/head'
import styles from '../../styles/AnimeHome.module.css'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import CardGrid from "../../components/CardGrid"

export default function AnimeTop({ url}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([1]);

  console.log("currentPage: ", currentPage);
  console.log("pages: ", pages);

  return (
    <div className={styles.container}>
      <Head>
        <title>Katasuka</title>
        <meta name="description" content="Katasuka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
        Katasuka
        </h1>

        {pages.map((page) => (
          <CardGrid key={page} opt="anime" url={`${url}?page=${page}`} />
        ))}

        <button onClick={() => (
          setCurrentPage(currentPage + 1) &
          setPages((oldPages) => [...oldPages, currentPage + 1])
        )} className={styles.loadMoreButton}>
          Load More
        </button>

      </main>
      <Footer />
    </div>
  )
}
