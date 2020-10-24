import MenuItems from './main_nav_menu_items';
import styles from '../styles/Main_nav.module.css';
import { UserContext } from './store';

export default function main_nav() {
  const [user, setUser] = React.useContext(UserContext);
  return (
    <nav className={styles.nav}>
      <div>
        <img src='/logo.svg' className={styles.nav_logo} alt='Logo' />
      </div>

      <MenuItems />
    </nav>
  );
}
