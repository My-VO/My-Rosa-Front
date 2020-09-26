import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

import Items from './components/pages/Home';
import Item from './components/pages/Produit';

import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Items} />
          <Route exact path="/items/:itemId" component={Item} />
          <Route exact path="/signup">
            <h1>Signup</h1>
          </Route>
          <Route exact path="/login">
            <h1>Login</h1>
          </Route>
          <Route exact path="/checkout">
            <h1>Checkout</h1>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
