import Head from 'next/head'
import styles from '../../styles/AnimeHome.module.scss'

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageGrid from "../../components/PageGrid"

export default function AnimeSeason() {
  return (
    <PageGrid url="https://api.jikan.moe/v4/seasons/now" />
  )
}
