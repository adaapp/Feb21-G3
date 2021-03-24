import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopCurve from './TopCurve.js'
import BottomCurve from './BottomCurve.js';


function VideoCall(){

    return(
        <Container fluid>

        <TopCurve heading= 'Video Call'/>
        <Row>
            <Col className="video-first-col">Sign Language Translator</Col>
            <Col>Video</Col>
            <Col> Contacts</Col>
        </Row>

        <BottomCurve/>
        </Container>

    );

}


export default VideoCall;