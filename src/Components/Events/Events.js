import React from 'react'
import { details2, details1, details3 } from './file'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Events.css'
const Events = () => {


    return (
        <div className='events'>
            <div>
                <h1 className='heading1'>WORKSHOPS</h1>
                <div className='workshops'>
                    {
                        details2.map((item, index) => {
                            return (
                                <div className='single-card' key={index}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} style={{ border: '5px solid white',height:'200px'}} />
                                        <Card.Body  >
                                            <Card.Title style={{ color: '#FF00FF' }}>{item.title}</Card.Title>
                                            <Card.Text>
                                                {item.time}
                                            </Card.Text>
                                            <Card.Text><span style={{ color: '#7FFF00' }}>Registration Fee :  </span>{item.Fee}</Card.Text>
                                            <Card.Text><span>Student Coordinator :  </span>{item.StudentIncharge}</Card.Text>
                                            <Card.Text>{item.Mentor}<span> </span></Card.Text>
                                            <Button variant="success" className='btn1'><a href={item.ppt} alt='error' target="_blank" >View Details</a></Button>
                                            <Button variant="primary" className='btn2'><a href={item.registration} alt='error' target="_blank">Register</a></Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <hr style={{ width: '90%' }} />
            <div>
                <h1 className='heading2'>TECH PRESENTATIONS</h1>
                <div className='presentations'>
                    {
                        details1.map((item, index) => {
                            return (
                                <div className='single-card' key={index}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} style={{ border: '5px solid white',height:'200px '}} />
                                        <Card.Body>
                                            <Card.Title style={{ color: '#FF00FF' }}>{item.title}</Card.Title>
                                            <Card.Text>
                                                {item.time}
                                            </Card.Text>
                                            <Card.Text><span style={{ color: '#7FFF00' }}>Registration Fee :  </span>{item.Fee}</Card.Text>
                                            <Card.Text><span>Student Coordinator :  </span>{item.StudentIncharge}</Card.Text>
                                            <Card.Text>{item.Mentor}<span> </span></Card.Text>
                                            <Button variant="success" className='btn1' ><a href={item.ppt} alt='error'>View Details</a></Button>
                                            <Button variant="primary" className='btn2' ><a href={item.registration} alt='error' target="_blank">Register</a></Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <hr style={{ width: '90%' }} />
            <div>
                <h1 className='heading3'>TECHNICAL QUIZ</h1>
                <div className='spot'>
                    {
                        details3.map((item, index) => {
                            return (
                                <div className='single-card' key={index}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} style={{ border: '5px solid white',height:'200px' }} />
                                        <Card.Body>
                                            <Card.Title style={{ color: '#FF00FF' }}>{item.title}</Card.Title>
                                            <Card.Text>
                                                {item.time}
                                            </Card.Text>
                                            <Card.Text><span style={{ color: '#7FFF00' }}>Registration Fee :  </span>{item.Fee}</Card.Text>
                                            <Card.Text><span>Student Coordinator :  </span>{item.StudentIncharge}</Card.Text>
                                            <Card.Text>{item.Mentor}<span> </span></Card.Text>
                                            <Button variant="success" className='btn1' ><a href={item.ppt} alt='error'>View Details</a></Button>
                                            <Button variant="primary" className='btn2'><a href={item.registration} alt='error' target="_blank">Register</a></Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default Events
