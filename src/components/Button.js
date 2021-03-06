import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to='/FractalViewer' onClick={onClick} className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    );
};

export const Button2 = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButton2Style = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButton2Size = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to='/' className='btn-mobile'>
            <button className={`btn ${checkButton2Style} ${checkButton2Size}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    );
};