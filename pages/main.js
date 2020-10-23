// import Store from '../components/store';
import useAuth from '../hooks/useAuth';

export default function main() {
  const { user, loading } = useAuth();
  // console.log('===>', user, loading);
  return (
    <div>
      {/* <Store> */}
      <h1>Main</h1>
      {loading || user === null ? 'Loading....' : <p>{user.email}</p>}
      {/* </Store> */}
    </div>
  );
}
