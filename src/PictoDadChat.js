import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import BackButton from './BackButton.js';
import groupIcon from './assets/groupIcon.jpeg'
import doubleIcon from './assets/doublepersoncall.jpeg'; 
import mumIcon from './assets/mum.jpeg';
import dadIcon from './assets/dadIcon.jpeg';
import thumbsUp from './assets/thumbsUp.png';
import mic from './assets/mic.png';




function PictoDadChat(){

    return(
        <Container fluid>
        <div className="heading">
        <h1>Picto Chat With Dad</h1>
        </div>
        <BackButton/>
        
        <Row>
            <Col className="video-first-col">
            <h2>Pictures/Images</h2>
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Food & Drink
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body> <Image width="200"  style={{width:'120px',height:'120px',marginLeft:'1rem'}} src='https://cdn2.iconfinder.com/data/icons/kitchen-1/512/plate_spoon-512.png' />
                    <Image width="200"  style={{width:'120px',height:'120px',marginLeft:'1rem'}} src='https://i.dlpng.com/static/png/6984684_preview.png' />
                    </Card.Body>
                    
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Outdoor Activities
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <Image width="200"  style={{width:'120px',height:'120px',marginLeft:'1rem'}} src='https://cdn4.iconfinder.com/data/icons/outdoor-recreational-pursuit/264/games-hobbies-01-009-512.png' />
                    <Image width="200"  style={{width:'120px',height:'120px',marginLeft:'1rem'}} src='https://icon-library.com/images/football-icon-png/football-icon-png-11.jpg'/>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
            <Col xs={6} className="picto-second-col"> 
            <Image width="200"  style={{width:'120px',height:'120px', float:'right'}} src={dadIcon} />
            <div>  

             <div className="message-sent">
             <Image width="200"  style={{width:'120px',height:'120px',marginLeft:'1rem'}} src='https://cdn2.iconfinder.com/data/icons/kitchen-1/512/plate_spoon-512.png' />
             <p>I am hungry</p>
             </div>

             <div className="message-received">  
             <Image width="200"  style={{width:'100px',height:'100px',marginLeft:'1rem'}} src={thumbsUp}/>           
             </div>

             <div className='form'>            

             <div>
             <Form>
             <Form.Group controlId="text">
                <Form.Control style={{height:'5rem', width:'30rem'}}    type="text" placeholder="Type Here" />
             </Form.Group>
            
             </Form>
             </div>
             <Button style={{height:'5rem', marginLeft:'3rem'}} variant="primary" type="submit">
                Send
             </Button>
             <Image width="200"  style={{width:'70px',height:'70px',marginLeft:'3rem'}} src={mic}/> 
            
            </div>
            </div>
             
            </Col>
            <Col className="video-third-col">
            <div className="contact-list">
            <h2>Contacts</h2>
            <h3>Groups</h3>
            <Image width="200" className="rounded mx-auto d-block" src={groupIcon} />
            <Image width="200" className="rounded mx-auto d-block" src={doubleIcon} />
            <Image width="200" className="rounded mx-auto d-block" src={mumIcon} />

            </div>
             </Col>
        </Row>
        </Container>

    );

}


export default PictoDadChat;