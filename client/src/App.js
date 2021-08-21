import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect, applyMiddleware } from 'react-redux';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'; 
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';
import './App.css';

const App = ({ setCurrentUser, currentUser }) => {
    // class App extends Component {
    //removed this for redux
    //   constructor(props) {
    //   super(props);

    //   this.state = {
    //     currentUser: null
    //   }
    // }

    // this fetches the users on luanch
    // componentDidMount() {
    //   fetch('http://localhost:3000/')
    //   .then(response => response.json())
    //   .then(data => {
    //       //console.log(data)
    //       setCurrentUser({
    //               id: data.id,
    //               data
    //     })
    //   })
    // }


      useEffect(() => {
        setCurrentUser();
      }, [setCurrentUser]); 

    return (
      <div>
        <BrowserRouter>
        <Header />
          <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' 
          render={() => currentUser ? (<Redirect to='/' />) : 
            (<SignInAndSignUpPage />)
          }/>
        </Switch>
        </BrowserRouter>
      </div>
    )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

//where does user come from? 
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(App);


// class App extends Component {
//     //removed this for redux
//   //   constructor(props) {
//   //   super(props);

//   //   this.state = {
//   //     currentUser: null
//   //   }
//   // }

// // this fetches the users on luanch
// // componentDidMount() {
// //   fetch('http://localhost:3000/')
// //   .then(response => response.json())
// //   .then(data => {
// //       //console.log(data)
// //       setCurrentUser({
// //               id: data.id,
// //               data
// //     })
// //   })
// // }

//   // this awaits conf from firebase, then sets the currentUser 
//   //how would you do this? how to get the info from the signin?
//   //its a separate process. on componentdidmount, it checks in with the db, if true, we have a sign in
//   //so in firebase, it logs as a user as true. how would ps do this? 
//   //then you check on app.js separately, I believe, whether the user is logged in. 
//   //if so, you update setCurrentuser from there. 
//   //but, i would wiat until you come across this in postgress studies. or Mongo. 
//   //otherwise, you will waste valuable time    

//   unsubscribeFromAuth = null;

//   componentDidMount() {
//       const { setCurrentUser } = this.props;

//       this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);
//         //here, if true, you also set state in the app 
//         userRef.onSnapshot(snapShot => {
//           setCurrentUser({
//               id: snapShot.id,
//               ...snapShot.data()
//             })
//         });
//       }
//       //tihs resets it to null when logged out, because userAuth is null
//       //this.setState({ currentUser: userAuth });
//       setCurrentUser(userAuth);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//     render () {
//     return (
//     	<div>
//     		<BrowserRouter>
//         <Header />
//           <Switch>
//     			<Route exact path='/' component={HomePage} />
//     			<Route path='/shop' component={ShopPage} />
//           <Route exact path='/checkout' component={CheckoutPage} />
//           <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : 
//             (<SignInAndSignUpPage />)
//             // {...props} currentUser={this.state.currentUser}
//           }/>
//     		</Switch>
//     		</BrowserRouter>
//     	</div>
// 		)
// 	}
// }

// //earlier
// // const mapStateToProps = ({ user }) => ({
// //   currentUser: user.currentUser
// // })

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser
// })


// //here you use dispatch to pass the action object, setCurrenUser, with the new user, to the reducers
// //the reducers work out which one is needed, then pass that along to the store
// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })
  
// export default connect(mapStateToProps, mapDispatchToProps)(App);
// <Route exact path='/signin' render={() => this.props.currentUser ? 
//                 (<Redirect to ='/' />
//                 ) : (
