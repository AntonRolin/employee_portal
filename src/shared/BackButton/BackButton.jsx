import React from 'react';
import './BackButton.css';

function BackButton( {handleClick}) {
  return (
    <div className='BackButton'>
        <button className='button' onClick={() => handleClick()}><b>&#5176;</b></button>
    </div>
  )
}

export default BackButton