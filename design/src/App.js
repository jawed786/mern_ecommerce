
import './App.css';
import React from 'react';
import Home from './pages/Home';
import ProductList from '../src/pages/ProductList'
import Product from '../src/pages/Product'
import Cart from '../src/pages/Cart'
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import Pay from './components/Pay';
import Success from './components/Success';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'


function App() {
  let user = true;
  const user1 = false
  const user2 = true
  return (
    <React.Fragment>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/> */}
          <Route path='/pay' element={<Pay/>}/>
          <Route path='/success' element={<Success/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
