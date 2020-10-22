import { VscAccount } from 'react-icons/vsc';
import styles from '../styles/User.module.css';

export default function user() {
  return (
    <div className={styles.wrapper}>
      <VscAccount size={65} />
      <div>Name</div>
      <div>Profile</div>
    </div>
  );
}
