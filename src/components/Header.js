// Header.js
import React from 'react';
import logo from '../img/logo.png';
import '../css/Header.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

function Header() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <header className="head">
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Your Library Name" className="logo-img" />
          </Link>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Mission">Mission</Link>
          <Link to="/AboutUs">About Us</Link>
        
          <Link to="https://amansharmamudgal.netlify.app/">Portfolio</Link>

        </div>
        <div className="cta">
          {isAuthenticated && <p>Account: {user.name}</p>}
          {isAuthenticated ? (
            <>
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
              <Link to="/cart">Cart</Link> {/* Added cart link */}
            </>
          ) : (
            <button onClick={() => loginWithRedirect()}>Log In</button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
