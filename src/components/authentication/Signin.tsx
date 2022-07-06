import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { SetStateAction, SyntheticEvent , useRef } from 'react'
import { auth } from '../../firebase';

type Props = {
    setUser: SetStateAction<any>,
    setAlreadyUser : SetStateAction<any>
}

export default function Signin(props : Props) {

    const {setUser, setAlreadyUser} = props;


    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);

    function formSubmit(e : SyntheticEvent){
        e.preventDefault()

        if(emailRef.current?.value == null || passRef.current?.value == null) return;

        signInWithEmailAndPassword(auth, emailRef.current?.value, passRef.current?.value)
        .then((userCredential) => {
            // Signed in 
            setUser(userCredential.user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

  return (
    <form onSubmit={formSubmit} className='flex flex-col justify-center items-start rounded-xl shadow-xl p-10 w-5/6 md:w-1/4'>
        <h2 className='mb-4 self-center font-bold text-xl text-orange-400'>Sign In</h2>
        <label htmlFor="email" >Email</label>
        <input type="text" className="w-full" ref={emailRef}/>
        <label htmlFor="pass" >Password</label>
        <input type="text" className="w-full" ref={passRef} />
        <button type='submit' className='self-center w-full bg-orange-400 rounded-md py-2 m-2 text-slate-800'>Submit</button>
        <p className='self-center'>No account?  <button onClick={() => {setAlreadyUser(false)}}>Sign Up</button></p>
        {/* <h1 className='text-red-600'>{error}</h1> */}
    </form>
  )
}