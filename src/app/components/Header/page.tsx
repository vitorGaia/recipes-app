'use client';
import Image from 'next/image';
import { headerIcons } from '../../images/header';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useContext } from 'react';
import { SearchContext } from '@/app/contexts/SearchProvider';
import styles from './page.module.css';

function Header() {
  interface Icons {
    [key: string]: string;
    meals: string;
    drinks: string;
    donerecipes: string;
    favorites: string;
    profile: string;
  }

  const {
    activeSearch,
    setActiveSearch,
  } = useContext(SearchContext);
  const pathname = usePathname();
  const formatPath = pathname.substring(pathname.lastIndexOf("/") + 1).toLowerCase();
  const icons: Icons = {
    meals: headerIcons.mealsIcon,
    drinks: headerIcons.drinksIcon,
    donerecipes: headerIcons.doneRecipesIcon,
    favorites: headerIcons.favoritesIcon,
    profile: headerIcons.profileIcon,
  };
  
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
          <button>
            <Image
              src={headerIcons.iconePesquisar}
              alt="logo"
              width="27"
              height="27"
              priority
              onClick={() => setActiveSearch(!activeSearch)}
            />
          </button>
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
      <div className={!activeSearch ? styles.displayNone : styles.headerActiveSearch}>
        <input type="text" placeholder="Search" />
        <div>
          <label>
            <input type="radio" />
            Ingredient
          </label>
          <label>
            <input type="radio" />
            Name
          </label>
          <label>
            <input type="radio" />
            First Letter
          </label>
        </div>
        <button>
          Search
        </button>
      </div>
    </div>
  );
}

export default Header;