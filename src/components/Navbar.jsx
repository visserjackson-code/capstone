// Navbar.jsx
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
        Home
      </NavLink>
      <NavLink to="/tracker" className={({ isActive }) => isActive ? 'active' : ''}>
        Track Teams
      </NavLink>
      <NavLink to="/nuzlocke" className={({ isActive }) => isActive ? 'active' : ''}>
        Nuzlocke Zone
      </NavLink>
    </nav>
  );
}

export default Navbar;