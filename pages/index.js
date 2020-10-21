import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Login from '../components/login';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CM-App</title>
        <link rel='icon' href='/favicon.ico' />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('authed')) {
            window.location.href = "/dashboard"
          }
        `,
          }}
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Caristrap Maintenance App</h1>

        <p className={styles.description}>Get started by</p>
        <Login />

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/cLogo.gif' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
