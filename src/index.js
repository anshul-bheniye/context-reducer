import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import {App} from './App';
import { CartProvider } from './context/CartContext';
 
const rootElement = (document.getElementById('root'))
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
      <App />
      </CartProvider>
    </Router>
  </React.StrictMode>
);