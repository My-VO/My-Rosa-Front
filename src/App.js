import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './components/CartContext.jsx';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import Items from './components/pages/Produits';
import Item from './components/pages/Produit';
import Cart from './components/pages/Cart';

import './App.scss';

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/items" component={Items} />
            <Route exact path="/items/:itemId" component={Item} />
            <Route exact path="/advice-and-inspiration">
              <h1>Conseils et Inspiration</h1>
            </Route>
            <Route exact path="/about-us">
              <h1>À propos</h1>
            </Route>
            <Route exact path="/account/signup">
              <h1>Signup</h1>
            </Route>
            <Route exact path="/account/login">
              <h1>Login</h1>
            </Route>
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
          </Switch>
        </Router>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
