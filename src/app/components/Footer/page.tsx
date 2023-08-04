import Link from "next/link";
import { headerIcons } from '../../images/header';
import Image from "next/image";
import styles from './page.module.css';

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <Link href='/pages/Meals'>
        <Image
          src={headerIcons.mealsIcon}
          alt="icone de comidas no rodapé"
        />
      </Link>
      <Link href='/pages/Drinks'>
        <Image
          src={headerIcons.drinksIcon}
          alt="icone de bebidas no rodapé"
        />
      </Link>
    </footer>
  );
}

export default Footer;