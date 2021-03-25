import React from 'react';
import { useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function BackButton(){
    let history = useHistory();

    function navigateToLoginPage(){
		history.push(`/`)
    }

    return(
        <Button variant="danger" onClick={navigateToLoginPage} style={{"marginLeft": '1rem'}}>Log Out</Button>
    )
}

export default BackButton;