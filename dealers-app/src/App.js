import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Display from './components/Display';
import ProductDetails from './components/ProductDetails';
import SignupForm from './components/SignupForm';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import LoginForm from './components/LoginForm';
import CheckoutForm from './components/CheckoutForm';
import FlyMenu from './components/FlyMenu';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [inCart, setInCart] = useState([]);

  useEffect(() => {
    try {
      fetch("http://ecommerce.muersolutions.com/api/v1/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, []);

  function addToCart(product) {
    setInCart([...inCart, product]);
  }

  function removeFromCart(productToRemove) {
    const updatedCart = inCart.filter(product => product !== productToRemove);
    setInCart(updatedCart);
  }

  return (
    <div className="App">
      <Routes>
        <Route element={<FlyMenu />}>
          <Route path="/" element={<Display products={products} />} />
          <Route path="/product/:index" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/components/signup" element={<SignupForm />} />
          <Route path='/components/cart' element={<Cart inCart={inCart} onRemove={removeFromCart} />} />
          <Route element={<ProductDetails />} path='/productdetails/:index' />
          <Route path='/cart' element={<Cart inCart={inCart} onRemove={removeFromCart} />} />
          <Route path="/components/checkout" element={<CheckoutForm />} />
          <Route path="/components/login" element={<LoginForm />} />
          <Route path="/components/home" element={<Home />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
