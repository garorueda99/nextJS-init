import styles from '../styles/AssetsBar.module.css';

export default function assetsBar() {
  return (
    <div className={styles.wrapper}>
      {/* <label className="rocker rocker-small"/> */}
      <div>
        <label className={styles.rocker}>
          <input type='checkbox' />
          <span className={styles.switch_left}>Yes</span>
          <span className={styles.switch_right}>No</span>
        </label>
      </div>

      <div>
        <button className={styles.button}>ADD NEW</button>
        <button className={styles.button}>EXPORT</button>
      </div>
    </div>
  );
}
