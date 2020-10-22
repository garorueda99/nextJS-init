import { BiExit } from 'react-icons/bi';
import { AiOutlineAlert } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import styles from '../styles/Menu_items.module.css';

export default function menu_items() {
  return (
    <>
      <div className={styles.desktop}>
        <AiOutlineAlert size={35} color='white' />
        <BiExit size={35} color='white' />
      </div>
      <AiOutlineMenu size={35} color='white' className={styles.mobile} />
    </>
  );
}
