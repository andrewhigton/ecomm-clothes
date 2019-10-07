import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './page/sign-in-sign-up/sign-in-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super()
  
    this.state = {
      currentUser: null
    }
  }



  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  compoentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
      return (
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInAndSignUpPage}/>
          </Switch>
        </div>
      );
  }
}
export default App;
