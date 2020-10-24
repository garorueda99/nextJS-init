import styles from '../styles/AssetsBar.module.css';

export default function assetsBar() {
  return (
    <div class={styles.wrapper}>
      <div>
        <button className={styles.button}>ADD NEW</button>
        <button className={styles.button}>EXPORT</button>
      </div>
    </div>
  );
}
