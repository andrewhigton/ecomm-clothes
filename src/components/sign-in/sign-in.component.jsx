import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle} from '../../firebase/firebase.utils'

import './sign-in.styles.scss';

class SignIn extends React.Component {
  //removed this for redux. not needed
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  //firebase version
  //then you send state to firebase, with email and password
  //you would haver to rewrite all of this, to get it working    
  //   handleSubmit = async event => {
  //   event.preventDefault();
  //   const { email, password } = this.state;
  //   // have to send email and password here to the server
  //   try {
  //     await auth.signInWithEmailAndPassword(email, password);
  //     //then reset the state to zero
  //     this.setState({ email: '', password: '' });
  //   } catch(error) {
  //     console.log(error);
  //   }
  // };
  
  //so you set state first, then you send state to firebase
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  // this is postgres db
  handleSubmit = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
        })  
      })
      .then(response => response.json())
      .then(user => {
        // this.props.loadUser
        // then change the route to homepage
        //how to set the info in app.js, then get it back to update the sign in??
        //how does firebase do it? 
        console.log(user)
        
          }) 
        //})
      }
  

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;