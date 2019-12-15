import React from 'react';
import './style/card.css';

const Card = (props) => {
  return <div className="card">
    <div className="container">
      {props.children}
    </div>
  </div>
}

export { Card }