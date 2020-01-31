import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Homepage from './Pages/homepage/Homepage.component'
import ShopPage from './Pages/shop/shop.component'
import Header from './components/header/header.component'
import SignPage from './Pages/sign-in/sign-in-and-sign-out'
import { auth, createUserProfileDocument } from './firebase/firebase.util'
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      currentUser: null,
      showCart: false,
      cartItems: []
    }
  }

  unsubscribeFromAuth = null;
  //lifecycle
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  showCartOnClick = () => {
    this.state.showCart ? this.setState({ showCart: false }) : this.setState({ showCart: true })
  }

  addItems = (Items) => {
    var list = { ...this.state.cartItems }
    var found = false;
    list.filter(i => {
      if (i.id === Items.id) {
        i.quanity++;
        found = true;
      }
    });
    if (found === false) {
      Items["quanity"] = 0;
      list.push(Items);
    }

    this.setState({
      cartItems: [...this.state.cartItems, Items]
    })
  }

  render() {
    console.log(this.state.cartItems);
    return (
      <div>
        <Header currentUser={this.state.currentUser} showCart={this.state.showCart} showCartHandler={this.showCartOnClick} />
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path='/shop' render={() => <ShopPage addItems={this.addItems} />}></Route>
          <Route
            exact path='/signin' render={() =>
              this.state.currentUser ?
                (
                  <Redirect to='/' />
                )
                :
                (
                  <SignPage />
                )
            }
          />
        </Switch>
      </div >
    )
  }
}

export default App;
