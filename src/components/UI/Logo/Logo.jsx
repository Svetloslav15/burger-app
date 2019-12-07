import React from 'react';
import burgerLogo from '../../../assets/images/logo.png';
import './Logo.css';

const logo = (props) => (
    <div className="logo" style={{height: props.height}}>
        <img src={burgerLogo} alt="logo"/>
    </div>
);

export default logo;