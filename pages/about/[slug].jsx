import * as React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import glob from 'glob';

import Head from 'next/head'
import Link from 'next/link';
import CardCarousel from "../../components/CardCarousel"
import Header from "../../components/Header"
import Footer from "../../components/Footer"



// Components
// import Layout from '../../components/Layout';

// Styles
import styles from '../../styles/AnimeHome.module.scss';
import stylesGeneral from '../../styles/ArticlesContent.module.scss';

// eslint-disable-next-line import/no-unresolved


export async function getStaticPaths() {
  // get all .md files in the posts dir
  const blogs = glob.sync('posts/**/*.md');

  // remove path and extension to leave filename only
  const blogSlugs = blogs.map(file =>
    file
      .split('/')[1]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  );

  // create paths with `slug` param
  const paths = blogSlugs.map(slug => `/about/${slug}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../posts/${slug}.md`);
  const config = await import(`../../data/config.json`);
  const data = matter(content.default);


  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}


const markdownTemplate = ({ frontmatter, markdownBody, siteTitle }) => {
  const siteUrl = "katasuka.vercel.app"
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content="Katasuka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>{frontmatter.title}</h1>
        <div className={styles.dmca}>
            <ReactMarkdown>
              {markdownBody}
            </ReactMarkdown>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default markdownTemplate


