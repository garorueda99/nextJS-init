import { useContext } from 'react';
import { BiExit } from 'react-icons/bi';
import { AiOutlineAlert } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { MagicContext, UserContext } from './store';
import styles from '../styles/Menu_items.module.css';

export default function menu_items() {
  const [user, setUser] = React.useContext(UserContext);
  const [magic] = useContext(MagicContext);

  const handleLogout = async () => {
    await fetch(`/api/user/logout`, {
      method: 'GET',
    });
    setUser(null);
    await magic.user.logout();
  };

  return (
    <>
      <div className={styles.desktop}>
        <AiOutlineAlert size={35} color='white' />
        <button
          className={styles.iconButton}
          onClick={(e) => {
            e.preventDefault();
            handleLogout();
          }}
        >
          <BiExit size={35} color='white' />
        </button>
      </div>
      <AiOutlineMenu size={35} color='white' className={styles.mobile} />
    </>
  );
}
