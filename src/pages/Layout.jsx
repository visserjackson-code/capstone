import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout({token, user, onAuth, onLogout}) {
  return (
    <>
      <Navbar token={token} user={user} onAuth={onAuth} onLogout={onLogout} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;