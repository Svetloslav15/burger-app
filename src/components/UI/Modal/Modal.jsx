import React from 'react';
import './Modal.css';
import Asux from '../../../hocs/Asux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Asux>
        <Backdrop
            show={props.show}
            clicked={props.modalClosed}/>
        <div className="modal">
            {props.children}
        </div>
    </Asux>
);

export default modal;