import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Cart from './Cart';
import { useState } from 'react';
import Test from './Test';
import { cartcontext } from './Cartcontext';
import { useContext } from 'react';


function App() {

  return (
    <>

      <Cart ></Cart>
      <Home ></Home>
      
    </>
  );
}

export default App;
