import React from 'react';
import './lib.scss';

const Button = ({ label, onClick}) => (
  <button className="button" onClick={onClick}>
    {title}
  </button>
);

export default Button;