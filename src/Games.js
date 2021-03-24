import React from 'react';
import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import TopCurve from './TopCurve.js'
import BottomCurve from './BottomCurve.js'


import pongIcon from './assets/pong.png';
import equipmentIcon from './assets/equipment.png';


function Games(){
    return(
        <Container fluid>
        <TopCurve heading='Games'/>
        <Row>
            <Col>
            <Card style={{ width: '18rem'}} style={{"marginLeft": '21rem'}}>
            <Card.Img variant="top" src={pongIcon}/>
            <Card.Body>
            <Button variant="primary" style={{"marginLeft": '5rem'}} >Pong</Button>
             </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem'}} style={{"marginRight": '21rem'}}>
            <Card.Img variant="top" src={equipmentIcon}/>
            <Card.Body>
            <Button variant="primary" style={{"marginLeft": '4rem'}}  >to be defined</Button>
             </Card.Body>
            </Card>
            </Col>
        </Row>
        <BottomCurve/>
    </Container>
    );
}

export default Games;