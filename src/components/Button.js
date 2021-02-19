import React from 'react';
import './Button.css';

const STYLES = ['btn-primary', 'btn-outline'];

const SIZES = ['btn-medium', 'btn-large'];

const Button = ({ children, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonSize} ${checkButtonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
