import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './Pages/homepage/Homepage.component'
import ShopPage from './Pages/shop/shop.component'
import Header from './components/header/header.component'
import SignPage from './Pages/sign-in/sign-in-and-sign-out'
import { auth } from './firebase/firebase.util'
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' component={SignPage}></Route>
        </Switch>
      </div >
    )
  }
}

export default App;
