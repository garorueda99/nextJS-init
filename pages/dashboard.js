import useAuth from '../hooks/useAuth';
import Layout from '../components/layout';
export default function Dashboard() {
  const { user, loading } = useAuth();
  console.log('===>', user, loading);
  return (
    <>
      <Layout />
      <h1>Dashboard</h1>
      {loading || user === null ? 'Loading....' : <p>{user.email}</p>}
    </>
  );
}
