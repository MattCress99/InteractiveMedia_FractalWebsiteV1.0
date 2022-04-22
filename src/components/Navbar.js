import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const[click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const clickFunction = () => (setClick(!click));
    const closeMobileMenu = () => (setClick(false));
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []); //stops fractal viewer button from displaying on mobile when page is refereshed

    window.addEventListener('resize', showButton);
    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                    Fractally
                </Link>
                <div className='menu-icon' onClick={clickFunction}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> {/* menu icon on smaller res screens, changes between fa-times (x) and fa-bars (3 vetical bars) */}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/blogs' className='nav-links' onClick={closeMobileMenu}>
                            Blogs
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/fractals' className='nav-links' onClick={closeMobileMenu}>
                            Fractals
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/FractalViewer' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Fractal Viewer
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Fractal Viewer</Button>}
            </div>
        </nav>
    </>
  );
};

export default Navbar