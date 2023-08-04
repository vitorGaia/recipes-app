'use client';
import Header from '@/app/components/Header/page';
// import styles from './page.module.css';
import { usePathname } from 'next/navigation';
import Footer from '@/app/components/Footer/page';

function RecipeDetails() {
  const pathname = usePathname();

  return (
    <main className=''>
      <Header />
      <span>{pathname}</span>
      lau
      <Footer />
    </main>
  );
}

export default RecipeDetails;