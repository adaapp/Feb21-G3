import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import groupIcon from './assets/groupIcon.jpeg'
import doubleIcon from './assets/doublepersoncall.jpeg'; 
import mumIcon from './assets/mum.jpeg';
import dadIcon from './assets/dadIcon.jpeg';
import { useHistory} from 'react-router-dom';



function VideoCall(){
    let history = useHistory();

    function callDad(){
		history.push(`/calldad`)
    }



    return(
        <Container fluid>
        <div className="heading">
        <h1>Video Chat</h1>
        </div>
        <Row>
            <Col className="video-first-col">
            <h5>Sign Language Translator</h5>
            </Col>
            <Col xs={6} className="video-second-col"> 
            <div className="video-text">       
             Click on one of the contacts to start a video call
            </div>
            </Col>
            <Col className="video-third-col">
            <div className="contact-list">
            <h5>Contacts</h5>
            <h6>Groups</h6>
            <Image width="200" className="rounded mx-auto d-block" src={groupIcon} />
            <Image width="200" className="rounded mx-auto d-block" src={doubleIcon} />
            <Image width="200" className="rounded mx-auto d-block" src={dadIcon} onClick={callDad}/>
            <Image width="200" className="rounded mx-auto d-block" src={mumIcon} />

            </div>
             </Col>
        </Row>
        </Container>

    );

}


export default VideoCall;