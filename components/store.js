import { createContext, useState, useEffect } from 'react';
import { Magic } from 'magic-sdk';
import Layout from './layout';

/* initializing context API values */
export const MagicContext = createContext();
export const UserContext = createContext();
export const LoadingContext = createContext();

/* this function wraps our entire app within our context APIs so they all have access to their values */
const Store = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  const [magic, setMagic] = useState();
  useEffect(() => {
    (async () => {
      // setIsLoading(true);
      /* We initialize Magic in `useEffect` so it has access to the global `window` object inside the browser */
      let m = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY);
      await setMagic(m);
      // setIsLoading(false);
    })();
  }, []);

  return (
    // <LoggedInContext.Provider value={[loggedIn, setLoggedIn]}>
    <MagicContext.Provider value={[magic]}>
      <UserContext.Provider value={[user, setUser]}>
        <div>
          <Layout>
            <>{children}</>
          </Layout>
        </div>
        {/* </LoadingContext.Provider> */}
      </UserContext.Provider>
    </MagicContext.Provider>
  );
};

export default Store;
