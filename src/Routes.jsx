import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Items from './components/pages/store/Products';
import Item from './components/pages/store/Product';
import Cart from './components/pages/cart/index';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Orders from './components/pages/Orders';
import Default from './components/pages/Default';

const Routes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={Items} />
          <Route path="/items/:name" component={Item} />
          <Route path="/advice-and-inspiration">
            <h1>Conseils et Inspiration</h1>
          </Route>
          <Route path="/about-us">
            <h1>À propos</h1>
          </Route>
          <Route path="/account/signup" component={Signup} />
          <Route path="/account/login" component={Login} />
          <Route path="/wishlist">
            <h1>List de souhaits</h1>
          </Route>
          <Route path="/cart" component={Cart} />
          <Route path="/orders" component={Orders} />
          <Route path="/help-and-faq">
            <h1>Aide et FAQ</h1>
          </Route>
          <Route path="/catalogue-request">
            <h1>Demander un catalogue</h1>
          </Route>
          <Route path="*" component={Default} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default Routes;
