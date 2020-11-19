import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


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
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
          <Route path='/stamps' component={StampsPage} />
          <Route path='/wreaths' component={WreathsPage} />
        </Switch>
      </div>
    );
}

export default App;
