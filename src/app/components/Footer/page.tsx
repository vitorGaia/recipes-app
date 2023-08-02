import Link from "next/link";

function Footer() {
  return (
    <footer>
      <Link href='/pages/Meals'>Meals</Link>
      <Link href='/pages/Drinks'>Drinks</Link>
    </footer>
  );
}

export default Footer;