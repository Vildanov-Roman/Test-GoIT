import React from 'react';
import logo from '../Images/Logo.png'
import questions from '../Images/picture2 1.png'
import face from '../Images/Group 1.png'


const TopPart = () => {
    return (
        <div>
            <img src={logo} alt='GoIT' width="30" height="10"/>
            <img src={questions} alt='questions' width="300" height="400"/>
            <img src={face} alt='face' width="50" height="50"/>
        </div>
    )
};

export default TopPart;