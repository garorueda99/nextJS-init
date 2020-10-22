import styles from '../styles/Side_nav.module.css';
import Link from 'next/link';

export default function side_bar() {
  return (
    <div className={styles.wrapper}>
      SIDE BAR
      <ul>
        <li>
          <Link href='/main'>
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href='/machines'>
            <a>Machines</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
