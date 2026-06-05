import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../styles/Layout.css"


//wraps every page in the app to render persistent navbar and footer
function Layout({token, user, onAuth, onLogout}) {
  return (
    <>
      <Navbar token={token} user={user} onAuth={onAuth} onLogout={onLogout} />
      {/* renders current page component */}
      <main>
        <Outlet />
      </main>

      <footer className="footer">2026 Pokémon Team Tracker</footer>
    </>
  );
}

export default Layout;