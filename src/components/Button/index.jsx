import React from 'react';
import './Button.css';

export default function Button({value,onClick}) {
  return (
    <div className='button' onClick={onClick}>
      {value}
    </div>
  )
};