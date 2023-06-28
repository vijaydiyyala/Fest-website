import React from 'react'
import Card from 'react-bootstrap/Card';
import { details1, details2, details3 } from './details';
import './Contact.css'
const Contact = () => {

    return (
        <div className='contact'>
            <div className='contact-div'>
                <h4 className='div1'>Staff Coordinator</h4>
                <div className='cards'>
                    {
                        details1.map((detail, index) => {
                            return (
                                <div className='singlecard' key={index}>
                                    <Card bg='white' style={{ width: '18rem' }} className="mb-2">
                                        <Card.Body>
                                            <Card.Title>Name: <span style={{ fontFamily: 'cursive', color: 'rgb(100, 80, 50)' }}>{detail.guide}</span></Card.Title>
                                            <Card.Text>
                                                <h5>Contact Details:</h5>
                                                <span>{detail.Phno}</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div >
                            )
                        })
                    }
                </div>
                <hr className='line'></hr>
                <h4 className='div1'>Student Coordinator</h4>
                <div className='cards'>
                    {
                        details2.map((detail, index) => {
                            return (
                                <div className='singlecard' key={index}>
                                    <Card bg='white' style={{ width: '18rem' }} className="mb-2">
                                        <Card.Body>
                                            <Card.Title>Name: <span style={{ fontFamily: 'cursive', color: 'rgb(100, 80, 50)' }}>{detail.guide}</span> </Card.Title>
                                            <Card.Text>
                                                <h5>Contact Details:</h5>
                                                <span>{detail.Phno}</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div >
                            )
                        })
                    }
                </div>
                <hr className='line'></hr>
                <h4 className='div1'>Payment Coordinator </h4>
                <div className='cards'>
                    {
                        details3.map((detail, index) => {
                            return (
                                <div className='singlecard' key={index}>
                                    <Card bg='white' style={{ width: '18rem' }} className="mb-2">
                                        <Card.Body>
                                            <Card.Title>Name: <span style={{ fontFamily: 'cursive', color: 'rgb(100, 80, 50)' }}>{detail.guide}</span></Card.Title>
                                            <Card.Text>
                                                <h5>Contact Details:</h5>
                                                <span>{detail.Phno}</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div >
                            )
                        })
                    }
                </div>
                <hr className='line'></hr>
            </div>
        </div >

    )
}

export default Contact
