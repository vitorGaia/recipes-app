'use client';
import { useState } from 'react';
import tomate from '../../images/tomate.png';
import logo from '../../images/logoRecipesApp.png';
import styles from './page.module.css'
import Image from 'next/image';
import { setUserLocalStorage } from '../../../../services/localStorage/userLogin';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [formLogin, setFormLogin] = useState({email: '', password: ''});
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const route = useRouter();

  const handleSubmit = () => {
    setUserLocalStorage({ email: formLogin.email });
    route.push('/pages/Home');
  };

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
        priority
      />
      <form className={styles.loginForm}>
        <span>LOGIN</span>
        <input
          type="text"
          placeholder="Email"
          onChange={ (e) => setFormLogin({...formLogin, email: e.target.value}) }
        />
        <input
          type="text"
          placeholder="Password"
          onChange={ (e) => setFormLogin({...formLogin, password: e.target.value}) }
        />
        <button
          type="button"
          disabled={!(regexEmail.test(formLogin.email) && formLogin.password.length > 6)}
          onClick={handleSubmit}
        >
          Enter
        </button>
      </form>
    </main>
  );
}

export default Login;