import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../App.css';

const FlyMenu = () => {
  return (
    <div className="card-container">
      <nav className="navbar">
        <Link to="/">
          <button className="navLink"></button>
          <p>Products</p>
        </Link>
        <br />
        <Link to="/components/signUp">
          <button className="navLink"></button>
          <p>SignUp</p>
        </Link>
        <br />
        <Link to="/components/Login">
          <button className="navLink"></button>
          <p>Login</p>
        </Link>
        <br />
        <Link to="/cart">
          <button className="navLink"></button>
          <p>Cart</p>
        </Link>
        <br />
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default FlyMenu;
