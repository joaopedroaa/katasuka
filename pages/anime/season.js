import Head from 'next/head'
import styles from '../../styles/AnimeHome.module.css'

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageGrid from "../../components/PageGrid"

export default function AnimeTop() {
  return (<PageGrid url="https://api.jikan.moe/v4/seasons/now" />)
}