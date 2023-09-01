import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../App.css';
import { FaShoppingCart, FaUserPlus, FaUserCheck, FaHome } from 'react-icons/fa';

const FlyMenu = () => {
  return (
    <div className="card-container">
      <nav className="navbar">
        <Link to="/">
          <button className="navLink"></button>
          <FaHome/>
          <p>Products</p>
        </Link>
        <br />
        <Link to="/components/signUp">
          <button className="navLink"></button>
          <FaUserPlus/>
          <p>SignUp</p>
        </Link>
        <br />
        <Link to="/components/Login">
          <button className="navLink"></button>
          <FaUserCheck/>
          <p>Login</p>
        </Link>
        <br />
        <Link to="/cart">
          <button className="navLink"></button>
          <FaShoppingCart />
          <p>Cart</p>
        </Link>
        <br />
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default FlyMenu;
