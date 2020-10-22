import Head from 'next/head';
import { useContext } from 'react';
import { LoggedInContext, MagicContext } from './store';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import MainNav from './main_nav';
import SideNav from './side_nav';

const Layout = (props) => {
  // const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  // const [magic] = useContext(MagicContext);

  /**
   * Log user out of of the session with our app (clears the `auth` cookie)
   * Log the user out of their session with Magic
   */
  // const handleLogout = async () => {
  //   await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/logout`, {
  //     method: 'GET',
  //   });
  //   setLoggedIn(false);
  //   await magic.user.logout();
  // };

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>CM-App</title>
      </Head>
      <MainNav />
      <div className={styles.horizontal_area}>
        <SideNav />
        {/* If a user is logged in, show our Welcome message and Logout button */}
        {/* {loggedIn ? (
          <>
            <div className={styles.nav_user}>Welcome, {loggedIn}</div>
            <div className='logout-btn'>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}
              >
                Logout
              </a>
            </div>
          </>
        ) : (
          // Else, show the Login button
          <>
            <Link href='/login'>
              <div className='login-btn'>
                <a>Log in</a>
              </div>
            </Link>
          </>
        )} */}
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
