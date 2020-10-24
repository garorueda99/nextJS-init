import '../styles/globals.css';
import Store from '../components/store';

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Store>
        <Component {...pageProps} />
      </Store>
    </React.StrictMode>
  );
}

export default MyApp;
