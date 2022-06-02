import React from 'react';
import './SingleRowList.css';

function SingleRowList( {title = 'List', items = [{ text: 'No items'}], handleClick}) {
  return (
    <div className='SingleRowList'>
        <div className='title'>
            <h2>{title}</h2>
        </div>
        {items.map((item, index) =>
            <div key={item.id ? item.id : index} className='content'>
                <div className='text'>
                    <p onClick={() => handleClick(item.id ? item.id : index)}>{item.text}</p>
                </div>
            </div>
        )}
    </div>
  );
}

export default SingleRowList