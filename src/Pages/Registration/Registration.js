import React from 'react';
import './Registration.css';

const Registration = () => {
    return (
        <div className='process'>
            <h1 className='process-text'>Registration Process</h1>
            <div className='steps'>
                <ol>
                    <li>Go to the Events Page.</li>
                    <li>Select the Event you want.</li>
                    <li>Click on the <span>REGISTER BUTTON</span> that appears at the end.</li>
                    <li>It will navigate you to the Google Forms.</li>
                    <li>Where you have to fill the <span>DETAILS CORRECTLY</span>.</li>
                    <li><span>PAY MONEY</span> to the <span>BANK ACCOUNT</span> shown above in Google Forms.</li>
                    <li>After making the payment, you need to take a <span>SCREENSHOT</span> and <span>UPLOAD</span> it in the Google Forms.</li>
                    <li>If you have any queries just call us and we will solve those queries.</li>
                </ol>
            </div>
        </div>
    )
}

export default Registration
