import styles from '../styles/AssetsBar.module.css';
import Modal from './modal';
import AssetForm from './assetForm';
export default function assetsBar() {
  const [showModal, setShowModal] = React.useState(false);
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
        <button
          className={styles.button}
          onClick={() => {
            setShowModal(true);
          }}
        >
          ADD NEW
        </button>
        <button className={styles.button}>EXPORT</button>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <AssetForm />
        </Modal>
      )}
    </div>
  );
}
