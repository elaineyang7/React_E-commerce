import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
/*import { ReactComponent } from '*.svg';
import { render } from 'node-sass';*/


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

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return(
      <div>
        <Header currentUser={this.state.currentUser} />
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
}

export default App;
