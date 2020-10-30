import styles from '../styles/AssetForm.module.css';
export default function assetForm() {
  const [assetInfo, setAssetInfo] = React.useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    validate();
    console.log("HERE I'm  ==>", assetInfo);
    try {
      const res = await fetch('/api/assets', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'applicatrion/json',
        },
        body: JSON.stringify(assetInfo),
      });
    } catch (err) {}
  };

  const handleAssetInfoChange = (e) => {
    setAssetInfo({
      ...assetInfo,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {};

  return (
    <>
      <h2>New Asset Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name' className={styles.label}>
            Asset Name:
          </label>
          <input name='name' onChange={handleAssetInfoChange} />
        </div>
        <div>
          <label htmlFor='info' className={styles.label}>
            Info:
            <input name='info' onChange={handleAssetInfoChange} />
          </label>
        </div>
        <div>
          <label htmlFor='info2' className={styles.label}>
            Info2:
            <input name='info2' onChange={handleAssetInfoChange} />
          </label>
        </div>
        <button>SAVE</button>
      </form>
    </>
  );
}
