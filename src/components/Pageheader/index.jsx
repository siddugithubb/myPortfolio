import React from 'react';
import './style.scss';

export default function Pageheader(props) {
        const{headerText,icon}=props;
  return (
    <div className='pageheader'>
        <h1>{headerText}</h1>
        <span>{icon}</span>

    </div>
  )
}
