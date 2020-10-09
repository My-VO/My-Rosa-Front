import React, { useReducer, useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { CartProvider } from './components/context/CartContext.jsx';

import AuthContext from './components/context/auth';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import Items from './components/pages/Produits';
import Item from './components/pages/Produit';
import Cart from './components/pages/Cart';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Default from './components/pages/Default';

import './App.scss';

const API = process.env.REACT_APP_API;

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem('token') || {},
  user: {},
};

const reducer = (state, action) => {
  console.log('action.payload : ', action.payload);
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.data.token,
        user: action.payload.data.user,
      };
    case 'LOAD_USER':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        const result = await axios(`${API}/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch({
          type: 'LOAD_USER',
          payload: result.data,
        });
      }
    };
    fetchUser();
  }, []);

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
              <Route exact path="/account/signup" component={Signup} />
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
