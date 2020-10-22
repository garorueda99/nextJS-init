import useAuth from '../hooks/useAuth';
import Layout from '../components/layout';

export default () => {
  const { user, loading } = useAuth();
  console.log('===>', user, loading);
  return (
    <div>
      <Layout>
        <h1>Main</h1>
        {loading || user === null ? 'Loading....' : <p>{user.email}</p>}
      </Layout>
    </div>
  );
};
