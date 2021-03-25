import React from 'react';

// import Button from 'react-bootstrap/Button';
import TopCurve from './TopCurve.js'
import BottomCurve from './BottomCurve.js'
import BackButton from './BackButton.js';

function WebChat(){
    return(
        <>
            <TopCurve heading= "Picto Chat"/>
            <BackButton/>
            <BottomCurve/>

        </>
    );

}

export default WebChat;