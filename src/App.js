import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Items from './components/pages/Home';
import Item from './components/pages/Produit';

import logo from './assets/favicon/logo.png';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>My Rosa</p>
        </header>
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={Items} />
          <Route exact path="/items/:itemId" component={Item} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
