'use client';
import Header from '@/app/components/Header/page';
import styles from './page.module.css';
import { usePathname } from 'next/navigation';
import Footer from '@/app/components/Footer/page';
// req 12
function Home() {
  const pathname = usePathname();

  return (
    <main className={styles.homeContainer}>
      <Header />
      <span>{pathname}</span>
      <Footer />
    </main>
  );
}

export default Home;