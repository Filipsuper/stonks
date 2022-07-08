import { User } from 'firebase/auth'
import React from 'react'
import Graph from './Graph';

type Props = {
    user: User,
}

export default function homeScreen( props : Props) {

    const { user } = props;

    return (
        <main className='w-full h-screen flex flex-row'>
            <Graph />
            <div>
                <div>d</div>
                <div>d</div>
            </div>
            
        </main>
    )
}
