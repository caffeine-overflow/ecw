import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Homepage from './Pages/homepage/Homepage.component'
import ShopPage from './Pages/shop/shop.component'
import Header from './components/header/header.component'
import SignPage from './Pages/sign-in/sign-in-and-sign-out'
import { auth, createUserProfileDocument } from './firebase/firebase.util'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'

import './App.css';


class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }



  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route
            exact path='/signin' render={() =>
              this.props.currentUser ?
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

const mapStateToProps = ({ user }) => ({ //getting the current user here
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  // dispatch is a way to redux to know that whatever the object you are 
  //passing is going to be an action object that can be passed to every reducers
  //user parameter in the  setCurrentUser is used inside the action method
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
