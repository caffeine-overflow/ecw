import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Homepage from './Pages/homepage/Homepage.component'
import ShopPage from './Pages/shop/shop.component'
import Header from './components/header/header.component'
import SignPage from './Pages/sign-in/sign-in-and-sign-out'
import CheckoutPage from './Pages/Checkout/Checkout'

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
    var list = [...this.state.cartItems]
    var found = false;
    list.forEach(i => {
      if (i.id === Items.id) {
        i.quantity = i.quantity + 1;
        found = true;
      }
    });
    if (found === false) {
      Items["quantity"] = 1;
      list.push(Items);
    }
    this.setState({
      cartItems: list
    })
  }

  removeItems = (Items) => {
    var list = [...this.state.cartItems]
    list.forEach(i => {
      if (i.id === Items.id) {
        if (i.quantity > 1)
          i.quantity = i.quantity - 1;
        else
          list.splice(i, 1);
      }
    });
    this.setState({
      cartItems: list
    })
  }

  deleteItems = (Items) => {
    var list = [...this.state.cartItems]
    list.forEach(i => {
      if (i.id === Items.id) {
        list.splice(i, 1);
      }
    });
    this.setState({
      cartItems: list
    })
  }

  resetCart = () => {
    this.setState({
      cartItems: []
    })
  }


  calculateTotal = () => {
    var total = 0;
    this.state.cartItems.forEach(i =>
      total += (i.quantity * i.price)
    )
    return total;
  }

  render() {
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
          showCart={this.state.showCart}
          showCartHandler={this.showCartOnClick}
          Item={this.state.cartItems}
        />
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path='/shop' render={() => <ShopPage addItems={this.addItems} category="main" />}></Route>
          <Route exact path='/shop/hats' render={() => <ShopPage addItems={this.addItems} category="hats" />}></Route>
          <Route exact path='/shop/sneakers' render={() => <ShopPage addItems={this.addItems} category="sneakers" />}></Route>
          <Route exact path='/shop/jackets' render={() => <ShopPage addItems={this.addItems} category="jackets" />}></Route>
          <Route exact path='/shop/womens' render={() => <ShopPage addItems={this.addItems} category="womens" />}></Route>
          <Route exact path='/shop/mens' render={() => <ShopPage addItems={this.addItems} category="mens" />}></Route>

          <Route exact path='/checkout' render={() =>
            <CheckoutPage
              cartItems={this.state.cartItems}
              removeItems={this.removeItems}
              calculateTotal={this.calculateTotal}
              showCart={this.state.showCart}
              showCartHandler={this.showCartOnClick}
              addItems={this.addItems}
              deleteItems={this.deleteItems}
              resetCart={this.resetCart}
            />}></Route>
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
