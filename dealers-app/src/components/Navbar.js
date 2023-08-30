import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="#" className="navbar__logo">Your Logo</a>
        
        <ul className="navbar__menu">
          <li className="navbar__item"><a href="#">Home</a></li>
          <li className="navbar__item"><a href="#">About</a></li>
          <li className="navbar__item"><a href="#">Services</a></li>
          <li className="navbar__item"><a href="#">Contact</a></li>
        </ul>

        <div className="navbar__actions">
          <form className="navbar__search">
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
          </form>

          <a href="#" className="navbar__login">Login</a>
          <a href="#" className="navbar__signup">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
