import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './Nametype.css'

const Nametype = () => {

    const handleType = (count: number) => {
        // access word count number
        console.log(count)
    }


    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <h4 className='type-text1'>
            <span className='type-text'>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                    words={['Welcome to National level tech Carnival conducted by Department of Electrical and Electronics Engineering.']}
                    loop={5}
                    cursor
                    cursorStyle=''
                    typeSpeed={70}
                    deleteSpeed={0}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                />
            </span>
        </h4>
    )
}
export default Nametype
