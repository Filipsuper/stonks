import { User } from 'firebase/auth'
import React from 'react'
import Graph from './Graph';

type Props = {
    user: User,
}

export default function homeScreen( props : Props) {

    const { user } = props;

    return (
        <main className='center'>
            <div className='center p-4'>
                <Graph />
            </div>
        </main>
    )
}
