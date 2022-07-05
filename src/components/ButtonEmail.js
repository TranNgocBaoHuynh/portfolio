import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outline'];

const SIZE = ['btn--medium', 'btn--large'];

const sendMail = () => {
    const mailto: String =
        'mailto:thuynh30@asu.edu';
    window.location.href = mailto;
  }

export const ButtonEmail= ({
    children, 
    type, 
    onClick,
    buttonStyle,
    buttonSize}) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    
        const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
    
        return (
            <Link className='btn-mobile'>
              <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={sendMail}
                type={type}
              >
                {children}
              </button>
            </Link>
          );
    };
    