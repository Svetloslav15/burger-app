import React from 'react';
import './Layout.css';
import Asux from '../../hocs/Asux';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Asux>
        <Toolbar/>
        <main className="content">
            {props.children}
        </main>
    </Asux>
);

export default layout;