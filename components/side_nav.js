import styles from '../styles/Side_nav.module.css';
import Link from 'next/link';

export default function side_bar() {
  return (
    <div className={styles.wrapper}>
      <ul>
        <li>
          <Link href='/main'>
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href='/dashboard'>
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href='/todos'>
            <a>To-dos</a>
          </Link>
        </li>
        <li>
          <Link href='/machines'>
            <a>Machines</a>
          </Link>
        </li>
        <li>
          <Link href='/account'>
            <a>Account</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
