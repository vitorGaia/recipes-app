'use client';
import Image from 'next/image';
import headerIcon from '../../images/header/iconeRecipesAppHeader.svg';
import headerLogo from '../../images/header/logoRecipesAppHeader.svg';
import headerIconSeach from '../../images/header/iconePesquiarHeader.svg';
import headerIconPerfil from '../../images/header/iconePerfilHeader.svg';
import mealsIcon from '../../images/header/mealsIcon.svg';
import drinksIcon from '../../images/header/drinksIcon.svg';
import doneRecipesIcon from '../../images/header/doneRecipesIcon.svg';
import favoritesIcon from '../../images/header/favoritesIcon.svg';
import profileIcon from '../../images/header/profileIcon.svg';
import styles from './page.module.css';
import { usePathname } from 'next/navigation';

function Header() {
  interface Icons {
    [key: string]: string;
    meals: string;
    drinks: string;
    doneRecipes: string;
    favorites: string;
    profile: string;
  }
  const pathname = usePathname();
  const formatPath = pathname.substring(pathname.lastIndexOf("/") + 1).toLowerCase();
  const icons: Icons = {
    meals: mealsIcon,
    drinks: drinksIcon,
    doneRecipes: doneRecipesIcon,
    favorites: favoritesIcon,
    profile: profileIcon,
  };
  
  return (
    <div className={styles.headerContainer}>
      <nav>
        <div className={styles.headerContainerLogo}>
          <Image
            src={headerIcon}
            alt="logo"
            width="40"
            height="40"
            priority
          />
          <Image
            src={headerLogo}
            alt="logo"
            width="80"
            height="40"
            priority
          />
        </div>
        <div className={styles.headerContainerNavIcons}>
          <Image
            src={headerIconSeach}
            alt="logo"
            width="27"
            height="27"
            priority
          />
          <Image
            src={headerIconPerfil}
            alt="logo"
            width="27"
            height="27"
            priority
          />
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
    </div>
  );
}

export default Header;