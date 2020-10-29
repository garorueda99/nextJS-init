import styles from '../styles/AssetForm.module.css';
export default function assetForm() {
  return (
    <>
      <h2>New Asset Form</h2>
      <form name='asset' method='POST' action='api/assets'>
        <div>
          <label className={styles.label}>Asset Name:</label>
          <input />
        </div>
        <div>
          <label>
            Info:
            <input />
          </label>
        </div>
        <div>
          <label>
            Info2:
            <input />
          </label>
        </div>
        <button>SAVE</button>
      </form>
    </>
  );
}
