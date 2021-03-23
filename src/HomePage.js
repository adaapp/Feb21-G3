import React from 'react';
import TopCurve from './TopCurve.js';
import BottomCurve from './BottomCurve.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.css';
import videoIcon from './assets/videoIcon.png';
import keyboardIcon from './assets/keyboardIcon.jpg';
import gamesIcon from './assets/gameIcon.png';
import helpIcon from './assets/help.png';



function HomePage(){
    return(
        
        <Container fluid>
        <TopCurve heading = 'Home Page'/>
        
        <Row style={{"marginTop": '4rem'}}>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {videoIcon} />
            <Card.Body>
            <Button variant="primary" style={{"marginLeft": '4rem'}}>Video Call</Button>
             </Card.Body>
            </Card>
            </Col>
            
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={keyboardIcon} />
            <Card.Body>
            
            <Button variant="primary" style={{"marginLeft": '4rem'}}>Text Chat</Button>
             </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={gamesIcon} />
            <Card.Body>
            <Button variant="primary" style={{"marginLeft": '4rem'}}>Play Games</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={helpIcon} />
            <Card.Body>
            <Button variant="primary" style={{"marginLeft": '4rem'}}>Helpful Links</Button>
             </Card.Body>
            </Card>
            </Col>
        </Row>
        <BottomCurve/>
        
    </Container>
        
    );
}

export default HomePage;