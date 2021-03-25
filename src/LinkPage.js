import React from 'react';
import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import tabletIcon from './assets/tablet.png'
import pictographicIcon from './assets/pictographic.png';
import helpIcon from './assets/help.png';
import equipmentIcon from './assets/equipment.png';
import TopCurve from './TopCurve.js';
import BottomCurve from './BottomCurve.js';
import BackButton from './BackButton.js';
import './App.css';



function LinkPage(){
    return(
        
        <Container fluid>
        <TopCurve heading='Link Page'/>
        <BackButton/>
        <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={tabletIcon}/>
            <Card.Body>
            <Button variant="primary" href= "https://www.gov.uk/government/news/free-tablets-to-improve-lives-of-thousands-of-people-with-learning-disabilities" target="_blank"
             rel="noopener noreferrer" style={{"marginLeft": '0.7rem'}}>Redeem Your Free Tablet</Button>
             </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictographicIcon}/>
            <Card.Body>
            <Button variant="primary" href= "https://alphadogadasigns.com/do-you-need-pictograms-on-your-ada-signs/" target="_blank"
             rel="noopener noreferrer" style={{"marginLeft": '2rem'}}>Pictographic Images</Button>
             </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={helpIcon}/>
            <Card.Body>
            <Button variant="primary" href= "https://www.scope.org.uk/" target="_blank"
             rel="noopener noreferrer" style={{"marginLeft": '2.5rem'}}>Advice and Help</Button>
             </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={equipmentIcon}/>
            <Card.Body>
            <Button variant="primary" href= "https://www.nhs.uk/conditions/social-care-and-support-guide/care-services-equipment-and-care-homes/household-gadgets-and-equipment-to-make-life-easier/" target="_blank"
             rel="noopener noreferrer" style={{"marginLeft": '2rem'}}>Self Care equipment</Button>
             </Card.Body>
            </Card>
            </Col>
        </Row>
        <BottomCurve/>
    </Container>
        
    );
}

export default LinkPage;