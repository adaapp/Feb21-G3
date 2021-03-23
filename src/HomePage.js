import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.css';



function HomePage(){
    return(
        
        <Container fluid>
         <Navbar className="mb-0" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand style={ {color:"white" } }> Access4All</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">            
            </Navbar.Collapse>
        </Navbar>
        <Row>
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
    </Container>
        
    );
}

export default HomePage;