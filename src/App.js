import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import AuthContextProvider from './components/contexts/AuthContext';
import CartContextProvider from './components/contexts/CartContext.jsx';

import Routes from './Routes';

import './App.scss';

function App() {
  return (
    <HelmetProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <Routes />
        </CartContextProvider>
      </AuthContextProvider>
    </HelmetProvider>
  );
}

export default App;
