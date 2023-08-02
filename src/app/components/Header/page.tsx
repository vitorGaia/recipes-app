'use client';
import { headerIcons } from '../../images/header';
import { useContext } from 'react';
import { SearchContext } from '@/app/contexts/SearchProvider';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

function Header() {
  const {
    activeSearch,
    setActiveSearch,
    icons,
    formatPath,
    setSearchType,
    setSearchQuery,
    handleSearch,
    searchButtonDisable,
  } = useContext(SearchContext);
  
  return (
    <div className={styles.headerContainer}>
      <nav>
        <div className={styles.headerContainerLogo}>
          <Image
            src={headerIcons.iconeRecipesApp}
            alt="logo"
            width="40"
            height="40"
            priority
          />
          <Image
            src={headerIcons.logoRecipesApp}
            alt="logo"
            width="80"
            height="40"
            priority
          />
        </div>
        <div className={styles.headerContainerNavIcons}>
          <Image
            src={headerIcons.iconePesquisar}
            alt="logo"
            width="27"
            height="27"
            priority
            onClick={() => setActiveSearch(!activeSearch)}
          />
          <Link href='/pages/Profile'>
            <Image
              src={headerIcons.iconePerfil}
              alt="logo"
              width="27"
              height="27"
              priority
            />
          </Link>
        </div>
      </nav>
      <div className={styles.sectionIcon}>
        <Image
          src={icons[formatPath]}
          alt="logo"
          width="30"
          height="30"
          priority
        />
        <span>{formatPath.toUpperCase()}</span>
      </div>
      <div className={!activeSearch ? 'displayNone' : styles.headerActiveSearch}>
        <input type="text" placeholder="Search" onChange={ (e) => setSearchQuery(e.target.value) } />
        <div>
          <label>
            <input type="radio" value='ingredient' onChange={ (e) => setSearchType(e.target.value) } />
            Ingredient
          </label>
          <label>
            <input type="radio" value='name' onChange={ (e) => setSearchType(e.target.value) } />
            Name
          </label>
          <label>
            <input type="radio" value='first letter' onChange={ (e) => setSearchType(e.target.value) } />
            First Letter
          </label>
        </div>
        <button disabled={ searchButtonDisable } onClick={ handleSearch }>
          Search
        </button>
      </div>
    </div>
  );
}

export default Header;