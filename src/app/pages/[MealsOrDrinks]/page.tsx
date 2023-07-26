import Header from '@/app/components/Header/page';
import styles from './page.module.css';

function Home() {
  return (
    <main className={styles.homeContainer}>
      <Header />
      home page
    </main>
  );
}

export default Home;