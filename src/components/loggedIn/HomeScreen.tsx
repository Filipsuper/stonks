import { User } from 'firebase/auth'
import React from 'react'
import Graph from './Graph';

interface Props{
    user: any, //Vet inte riktigt varöfr jag inte kan assigna "User"
}

export default function homeScreen( props : Props) {

    const { user } = props;

    return (
        <main className='w-full h-screen grid grid-cols-3 grid-rows-2'>
            <Graph />
            <div></div>
            <div></div>
        </main>
    )
}