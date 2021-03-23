import React from 'react';
import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.css';



function HomePage(){
    return(
        
        <Container fluid>

        <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Button variant="primary" style={{"margin-left": '4rem'}}>Redeem Your Free Tablet</Button>
             </Card.Body>
            </Card>
            </Col>
            
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            
            <Button variant="primary" style={{"margin-left": '4rem'}}>Pictographic Symbols</Button>
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
            <Button variant="primary">something 3</Button>
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
            <Button variant="primary">something 4</Button>
             </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
        
    );
}

export default HomePage;