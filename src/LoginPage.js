import React from 'react';
import TopCurve from './TopCurve.js';
import BottomCurve from './BottomCurve.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './App.css';
import { useHistory} from 'react-router-dom';


function LoginPage(){
    let history = useHistory();

    function navigateToHome(){
		history.push(`/home`)
    }
    return(
        <>
        <TopCurve heading ="Login Page"/>
        <Container>
            <Row>

            <div className="login-btn">
                <Button onClick={navigateToHome} style={{backgroundColor:'black'}}><Image width="20px" style={{"marginBottom":'3px', "marginRight":'5px'}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                Login with Google</Button>
                               
            </div>

            </Row>
        </Container>

        <BottomCurve/>
        </>
    )
}

export default LoginPage;