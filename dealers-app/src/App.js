import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserAuth from './components/UserAuth'; 

// import ShoppingCart from './components/ShoppingCart';
//import Cart from './components/Cart';
import './styles/Navbar.css';
function App () {
  return (
    // <Router>
      <div>
          <Navbar />
           <UserAuth />
      
        {/* <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/checkout" component={Checkout} />
        </Switch> */}
      </div>
//     {/* </Router> */}
  );
}

export default App;
