import MenuItems from './main_nav_menu_items';
import styles from '../styles/Main_nav.module.css';
import { LoggedInContext } from './store';
export default function main_nav() {
  const [loggedIn, setLoggedIn] = React.useContext(LoggedInContext);
  return (
    <nav className={styles.nav}>
      <div>
        {loggedIn}
        <img src='/logo.svg' className={styles.nav_logo} alt='Logo' />
      </div>

      <MenuItems />
    </nav>
  );
}
