import React from 'react';
import './Button.css';

function Button(props) {
  return <button {...props} className={'button ' + props.class}></button>;
}

export default Button;
