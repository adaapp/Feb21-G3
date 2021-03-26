import React from 'react';
import './App.css';
import { useHistory} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import BackButton from './BackButton.js';
import groupIcon from './assets/groupIcon.jpeg'
import doubleIcon from './assets/doublepersoncall.jpeg'; 
import mumIcon from './assets/mum.jpeg';
import dadIcon from './assets/dadIcon.jpeg';




function PictoChat(){
    let history = useHistory();

    function navigateToChat(){
		history.push(`/chat`)
    }



    return(
        <Container fluid>
        <div className="heading">
        <h1>Picto Chat</h1>
        </div>
        <BackButton/>
        
        <Row>
            <Col className="video-third-col">
            <div className="contact-list">
            <h2>Contacts</h2>
            <div className='picto-contacts'>
            <Image width="200" className="rounded mx-auto d-block" src={groupIcon} />
            <Image width="200" className="rounded mx-auto d-block" src={doubleIcon} />
            <Image width="200" className="rounded mx-auto d-block" src={dadIcon} onClick={navigateToChat}/>
            <Image width="200" className="rounded mx-auto d-block" src={mumIcon} />
            </div>

            </div>
             </Col>
        </Row>
        </Container>

    );

}


export default PictoChat;