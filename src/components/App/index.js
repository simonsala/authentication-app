import React from 'react';
import SignInForm from '../SignIn';
import SignUpForm from '../SignUp';
import Tabs from '../Tabs';
import './index.css';

function App() {
  return (
    <div className='authentication-window'><Tabs tabItems={[<SignInForm name='Sign In'/>, <SignUpForm name='Sign Up'/>]}/></div>
  );
}

export default App;
