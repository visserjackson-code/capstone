import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
        HOME
      </NavLink>
      <NavLink to="/tracker" className={({ isActive }) => isActive ? 'active' : ''}>
        TEAMS
      </NavLink>
      <NavLink to="/nuzlocke" className={({ isActive }) => isActive ? 'active' : ''}>
        NUZLOCKES
      </NavLink>
    </nav>
  );
}

export default Navbar;