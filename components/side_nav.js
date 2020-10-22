import styles from '../styles/Side_nav.module.css';
import Link from 'next/link';
import User from './user';
import { BiHomeSmile, BiTachometer } from 'react-icons/bi';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { GiFactory } from 'react-icons/gi';
import { VscAccount } from 'react-icons/vsc';

export default function side_bar() {
  return (
    <div className={styles.wrapper}>
      <User />
      <ul className={styles.list}>
        <li>
          <BiHomeSmile className={styles.icons} />
          <Link href='/main'>
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <BiTachometer className={styles.icons} />
          <Link href='/dashboard'>
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <AiOutlineUnorderedList className={styles.icons} />
          <Link href='/todos'>
            <a>To-dos</a>
          </Link>
        </li>
        <li>
          <GiFactory className={styles.icons} />
          <Link href='/machines'>
            <a>Machines</a>
          </Link>
        </li>
        <li>
          <VscAccount className={styles.icons} />
          <Link href='/account'>
            <a>Account</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
