import React from 'react'
import { details } from './file1'
import SimpleCard from './SimpleCard'
const Memories = () => {
    return (
        <div>
            <h1 className='h1-tag'>Memories</h1>
            <SimpleCard props={details} />
        </div>
    )
}

export default Memories
