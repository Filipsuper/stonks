import { User } from 'firebase/auth'
import React from 'react'

interface Props{
    user: any, //Vet inte riktigt varöfr jag inte kan assigna "User"
}

export default function homeScreen( props : Props) {

    const { user } = props;

    return (
        <div>
            Welcome {user.email}
        </div>
    )
}