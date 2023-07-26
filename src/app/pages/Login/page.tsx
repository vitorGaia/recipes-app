import React from 'react';
import tomate from '../../images/tomate.png';
import logo from '../../images/logoRecipesApp.png';
import styles from './page.module.css'
import Image from 'next/image';

function Login() {
  return (
    <main className={styles.loginPage}>
      <Image
        src={logo}
        alt="logo recipes app"
        width={500}
        height={500}
        className={styles.logoImage}
      />
      <Image
        src={tomate}
        alt="tomate delicioso"
        width={500}
        height={500}
        className={styles.tomateImage}
      />
      <form className={styles.loginForm}>
        <span>LOGIN</span>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="button">Enter</button>
      </form>
    </main>
  );
}

export default Login;