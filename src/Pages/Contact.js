import React from 'react';
import './style.css'
import { Input, Col } from 'reactstrap'

function Contact() {
    return(
        <div className="background">
            <h1 className="center">Devin Sherman</h1>
            <div className="center">
            <h3>Send me a message</h3>
                <p>4604 S. 3900 W.<br/>Roy, UT, 84067</p>
                <p>Cell: 801-644-8431</p>
                <p>Email: dsmanu15@hotmail.com</p>
                <Col sm={4}>
                    <Input type="text" placeholder="Name Here" />
                </Col>
                <Col sm={4}>
                    <Input type="email" placeholder="Email Address" />
                </Col>
                <Col sm={4}>
                    <Input type="text" placeholder="Subject" />
                </Col>
                <Col sm={4}>
                    <Input type="textarea" placeholder="Message" required />
                </Col>
                </div>
        </div>
    )
}

export default Contact