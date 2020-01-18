import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage.component'
import './App.css';

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
