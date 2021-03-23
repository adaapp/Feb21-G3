import React from 'react';
import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.css';
import videoIcon from './videoIcon.png';
import keyboardIcon from './keyboardIcon.jpg';



function HomePage(){
    return(
        
        <Container fluid>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#0099ff" fillOpacity="1" d="M0,288L60,261.3C120,235,240,181,360,165.3C480,149,600,171,720,170.7C840,171,960,149,1080,133.3C1200,117,1320,107,1380,101.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
         {/* <Navbar className="mb-0" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand style={ {color:"white" } }> Access4All</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">            
            </Navbar.Collapse>
        </Navbar> */}
        <h1>HOME PAGE</h1>
        <Row>
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
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
             the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
             </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
             the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
             </Card.Body>
            </Card>
            </Col>
        </Row>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,192L80,213.3C160,235,320,277,480,266.7C640,256,800,192,960,149.3C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </Container>
        
    );
}

export default HomePage;