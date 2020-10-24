import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Store from '../components/store';

export default function index() {
  return (
    <Store>
      <div className={styles.container}>
        <Head></Head>

        <main className={styles.main}>THE INDEX IS HERE</main>

        <footer className={styles.footer}>
          <a
            href='http://caristrap.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by{' '}
            <img
              src='/cLogo.gif'
              alt='Caristrap Logo'
              className={styles.logo}
            />
          </a>
        </footer>
      </div>
    </Store>
  );
}
