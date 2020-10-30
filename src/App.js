import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
//import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
//import Header from './components/header/header.component';

const StampsPage = () => (
  <div>
    <h1>STAMPS PAGE</h1>
  </div>
);

const WreathsPage = () => (
  <div>
    <h1>WREATHS PAGE</h1>
  </div>
);

function App() {
    return(
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/stamps' component={StampsPage} />
          <Route path='/wreaths' component={WreathsPage} />
        </Switch>
      </div>
    );
}

export default App;
