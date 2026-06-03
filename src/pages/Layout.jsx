import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../styles/Layout.css"

function Layout({token, user, onAuth, onLogout}) {
  return (
    <>
      <Navbar token={token} user={user} onAuth={onAuth} onLogout={onLogout} />
      <main>
        <Outlet />
      </main>

      <footer className="footer">2026 Pokémon Team Tracker</footer>
    </>
  );
}

export default Layout;