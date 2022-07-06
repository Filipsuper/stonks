import { createUserWithEmailAndPassword, User, UserCredential } from 'firebase/auth';
import React, {SetStateAction, SyntheticEvent, useRef, useState} from 'react';
import { auth } from '../../firebase';

type Props = {
  setUser: SetStateAction<any>;
  setAlreadyUser: SetStateAction<any>;
}

function SignUp(props : Props) {

  const {setUser, setAlreadyUser} = props;

  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function formSubmit(e : SyntheticEvent){
    e.preventDefault()

    if(emailRef.current?.value == null || passRef.current?.value == null) return;
    
    // setEmail(emailRef.current?.value)
    // setPassword(passRef.current?.value)

    createUserWithEmailAndPassword(auth, emailRef.current?.value, passRef.current?.value)
      .then((userCredential : UserCredential) => {
        // Signed in 
        setUser(userCredential.user)
        // ...
      })
      .catch((error : any) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        if(errorCode === "auth/email-already-in-use"){
          setError("Account already exists");
        }
      })
  }


  return (
    <form onSubmit={formSubmit} className='flex flex-col justify-center items-start rounded-xl shadow-xl p-10 w-5/6 md:w-1/4'>
      <h2 className='mb-4 self-center font-bold text-xl text-orange-400'>Sign Up</h2>
      <label htmlFor="email" >Email</label>
      <input type="text" className="w-full" ref={emailRef}/>
      <label htmlFor="pass" >Password</label>
      <input type="text" className="w-full" ref={passRef} />
      <button type='submit' className='self-center w-full bg-orange-400 rounded-md py-2 m-2 text-slate-800'>Submit</button>
      <p className='self-center'>Already got an account? <button onClick={() => {setAlreadyUser(true)}} >Link</button></p>
      <h1 className='text-red-600'>{error}</h1>
    </form>
  );
}

export default SignUp;