import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

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
          <Route path='/stamps' component={StampsPage} />
          <Route path='/wreaths' component={WreathsPage} />
        </Switch>
      </div>
    );
}

export default App;
