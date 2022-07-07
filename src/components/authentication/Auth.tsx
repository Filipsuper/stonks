import React, { SetStateAction, useState } from 'react'
import Signin from './Signin'
import SignUp from './SignUp'


type Props = {
    setUser: SetStateAction<any>,
}

export default function Auth(props : Props) {
    const { setUser } = props;
    const [alreadyUser, setAlreadyUser] = useState(false);

  return (
    <>
        {alreadyUser ?  <Signin setUser={setUser} setAlreadyUser={setAlreadyUser} /> : <SignUp setUser={setUser} setAlreadyUser={setAlreadyUser}/>}
    </>
  )
}
