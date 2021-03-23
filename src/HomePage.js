import React from 'react';
import TopCurve from './TopCurve.js';
import BottomCurve from './BottomCurve.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.css';
import videoIcon from './videoIcon.png';
import keyboardIcon from './keyboardIcon.jpg';
import gamesIcon from './gameIcon.png';
import helpIcon from './help.png';



function HomePage(){
    return(
        
        <Container fluid>
       
        {/* <div className = "top-curve">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 275" style ={{width: '50%'}}><path fill="#0099ff" fillOpacity="1" d="M0,288L60,277.3C120,267,240,245,360,213.3C480,181,600,139,720,101.3C840,64,960,32,1080,16C1200,0,1320,0,1380,0L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <h1>HOME PAGE</h1>
        </div> */}
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