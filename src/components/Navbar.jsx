import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import AuthModal from './AuthModal';
import '../styles/Navbar.css';

//token and user come from App.jsx to determine whether logged in or logged out state is displayed
function Navbar({ token, user, onAuth, onLogout }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-links">
          {/* isActive updates the active class to highlight the currently viewed page */}
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
        {/* shows email and lgout when logged in, login/register button when logged out */}
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
      {/* render the auth modal only when showModal is true. onAuth passes the token and email up to App.jsx on success */}
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