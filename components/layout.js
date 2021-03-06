import Head from 'next/head';
import { useContext } from 'react';
import { UserContext } from './store';
import styles from '../styles/Layout.module.css';
import MainNav from './main_nav';
import SideNav from './side_nav';
import Login from './login';

const Layout = ({ children }) => {
  const [user, setUser] = useContext(UserContext);

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
      {user !== null ? (
        <div className={styles.mainScreen}>
          <MainNav />
          <div className={styles.horizontal_area}>
            <SideNav />
            {children}
          </div>
        </div>
      ) : (
        // Else, show the Login button
        <>
          <Login />
        </>
      )}
    </div>
  );
};

export default Layout;
