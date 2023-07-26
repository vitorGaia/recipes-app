'use client';
import Header from '@/app/components/Header/page';
import styles from './page.module.css';
import { usePathname } from 'next/navigation';

function Home() {
  const pathname = usePathname();

  return (
    <main className={styles.homeContainer}>
      <Header />
      <span>{pathname}</span>
    </main>
  );
}

export default Home;