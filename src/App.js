import React, { useReducer } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext.jsx';

import AuthContext from './components/context/auth';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import Items from './components/pages/Produits';
import Item from './components/pages/Produit';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import Default from './components/pages/Default';

import './App.scss';

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  token: localStorage.getItem('token') || {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <CartProvider>
        <div>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/items" component={Items} />
              <Route exact path="/items/:name" component={Item} />
              <Route exact path="/advice-and-inspiration">
                <h1>Conseils et Inspiration</h1>
              </Route>
              <Route exact path="/about-us">
                <h1>À propos</h1>
              </Route>
              <Route exact path="/account/signup">
                <h1>Signup</h1>
              </Route>
              <Route exact path="/account/login" component={Login} />
              <Route exact path="/wishlist">
                <h1>List de souhaits</h1>
              </Route>
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/help-and-faq">
                <h1>Aide et FAQ</h1>
              </Route>
              <Route exact path="/catalogue-request">
                <h1>Demander un catalogue</h1>
              </Route>
              <Route component={Default} />
            </Switch>
          </Router>
          <Footer />
        </div>
      </CartProvider>
    </AuthContext.Provider>
  );
}

export default App;
