'use client';
import Header from '@/app/components/Header/page';
import styles from './page.module.css';
import { usePathname, useRouter } from 'next/navigation';
import Footer from '@/app/components/Footer/page';
import { useContext, useEffect } from 'react';
import { SearchContext } from '@/app/contexts/SearchProvider';

function Home() {
  const route = useRouter();
  const pathname = usePathname();
  const { headerRecipes, activeSearch, setActiveSearch } = useContext(SearchContext);

  useEffect(() => {
    const { meals } = headerRecipes;
    if (meals && meals.length === 1) {
      route.push(`${pathname}/${meals[0].idMeal}`);
      setActiveSearch(false);
    }
  }, [activeSearch, headerRecipes, pathname, route, setActiveSearch]);

  return (
    <main className={styles.homeContainer}>
      <Header />
      <span>{pathname}</span>
      <Footer />
    </main>
  );
}

export default Home;