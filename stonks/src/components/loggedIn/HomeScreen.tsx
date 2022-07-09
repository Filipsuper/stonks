import { User } from 'firebase/auth'
import React from 'react'
import Graph from './Graph';

type Props = {
    user: User,
}

export default function homeScreen( props : Props) {

    const { user } = props;

    return (
        <main className='w-full h-screen flex flex-col justify-center items-center  md:flex-row'>
            <div className='w-3/4 h-full center p-10'>
                <Graph />
            </div>
        </main>
    )
}
