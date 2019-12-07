import React from 'react';
import './BackDrop.css';

const backDrop = (props) => (
  props.show ? <div
      className="backdrop"
        onClick={props.clicked}></div> : null
);

export default backDrop;