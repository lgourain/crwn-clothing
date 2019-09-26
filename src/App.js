import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
