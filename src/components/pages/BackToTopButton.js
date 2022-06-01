import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Button2 } from '../Button.js';
import '../Navbar.css';

function BackToTopButton() {
    const[click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const clickFunction = () => (setClick(!click));
    const closeMobileMenu = () => (setClick(false));
    const showButton = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setButton(true);
          } else {
            setButton(false);
        }
    };

    useEffect(() => {
        showButton()
    }, []); //shows button if you scroll 20px down

    window.addEventListener('resize', showButton);
    return (
    <>
        {button && <Button2 buttonStyle='btn--outline'>Top</Button2>}
    </>    
    );
};

export default BackToTopButton