import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import AuthModal from './AuthModal';
import '../styles/Navbar.css';

function Navbar({ token, user, onAuth, onLogout }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            HOME
          </NavLink>
          <NavLink to="/tracker" className={({ isActive }) => isActive ? 'active' : ''}>
            TEAMS
          </NavLink>
          <NavLink to="/nuzlocke" className={({ isActive }) => isActive ? 'active' : ''}>
            NUZLOCKES
          </NavLink>
        </div>
        <div className="navbar-auth">
          {token ? (
            <>
              <span className="navbar-user">{user}</span>
              <button className="navbar-button" onClick={onLogout}>Logout</button>
            </>
          ) : (
            <button className="navbar-button" onClick={() => setShowModal(true)}>
              Login / Register
            </button>
          )}
        </div>
      </nav>
      {showModal && (
        <AuthModal
          onClose={() => setShowModal(false)}
          onAuth={onAuth}
        />
      )}
    </>
  );
}

export default Navbar;