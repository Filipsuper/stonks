import { User } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase';
import Auth from './authentication/Auth';
import Signin from './authentication/Signin';
import SignUp from './authentication/SignUp';
import HomeScreen from './loggedIn/HomeScreen';

function App() {
  const [user, setUser] = useState<User>();

  return (
    <>
      <section className='flex justify-center items-center min-h-screen'>
        {auth.currentUser ? <HomeScreen user={ user }/> : <Auth setUser={setUser}/>} 
      </section>
      <footer></footer>
    </>
  );
}

export default App;
