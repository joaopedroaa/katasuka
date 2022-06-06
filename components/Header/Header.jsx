/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import stylesSearch from "../Search/Search.module.scss";
import { MdSearch } from "react-icons/md";




const Header = ({ type }) => {
  const [search, setSearch] = useState();
  // const [searchType, setsearchType] = useState();


  return (
    <header className={styles.header}>
      {/* <input
        className={styles.controlNavCheckbox}
        type="checkbox"
        id="control-nav"
      />
      <label className={styles.controlNav} htmlFor="control-nav" />
      <label className={styles.controlNavClose} htmlFor="control-nav" /> */}

      <nav>
        <div className={styles.frag}>
          <p>*Logo*</p>
          <Link href="/anime">Anime</Link>
          <Link href="/manga">Manga</Link>
        </div>

        <div className={styles.searchSection}>
          <input
            type="text"
            name="name"
            placeholder={`Search ${type}`}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <p>
            <Link
              href={`/search?type=anime&q=${search}`}
              className={stylesSearch.searchButton}
            >
              <MdSearch />
            </Link>
          </p>
        </div>

        <div className={styles.frag}>
          {/* <Link href="/search">Sear</Link> */}
          <Link href="/profile">Profile</Link>
        </div>

        {/* <button
          onClick={() => {
            setSearchUrl();
          }}
          // className={stylesSearch.searchButton}
        >
        </button> */}
        {/* <Link href="/login">Login</Link> */}
        {/* <h1>{search}</h1> */}
      </nav>
    </header>
  );
};
export default Header;
