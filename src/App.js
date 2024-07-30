import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes, useLocation } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import Register from './components/Register';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import ProductList from './components/ProductList';
import Cart from './components/Cart';



const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};
function AppContent() {
 

  const location = useLocation();
  return (
  
       
        <div className="App">
        <header className="App-header">
          <div className="left-top">
            <h1>MobileCart</h1>
          </div>
          {location.pathname === '/' && (
              <div className="right-top">
            <button onClick={() => window.location.href='/Login'}>Login</button>
            <button onClick={() => window.location.href='/Register'}>Register</button>
            
            </div>)}
            {location.pathname === '/Login' && (
              <div className="right-top">
            <button onClick={() => window.location.href='/'}>Home</button>
            <button onClick={() => window.location.href='/Register'}>Register</button>
            </div>)}
            {location.pathname === '/Register' && (
              <div className="right-top">
            <button onClick={() => window.location.href='/'}>Home</button>
            <button onClick={() => window.location.href='/Login'}>Login</button>
            </div>)}
            {location.pathname === '/ProductList' && (
              <div className="right-top">
            
            <button onClick={() => window.location.href='/Login'}>Sign Out</button>
            <button onClick={() => window.location.href='/Cart'}>Cart</button>
            </div>)}
            {location.pathname === '/Cart' && (
              <div className="right-top">
            
            <button onClick={() => window.location.href='/Login'}>Sign Out</button>
            {/* <button onClick={() => window.location.href='/Cart'}>Cart</button> */}
            </div>)}
            </header>
          
       
        <div className="content"></div>
        <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/ProductList" element={<ProductList />} />
            <Route path='/Cart' element={<Cart />} />

        </Routes>
       
        </div>
       

     
  );
}

export default App;
