import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './Pages/homepage/Homepage.component'
import ShopPage from './Pages/shop/shop.component'
import Header from './components/header/header.component'
import './App.css';


function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
