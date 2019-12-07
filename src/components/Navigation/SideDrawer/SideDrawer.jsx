import React from 'react';

import './SideDrawer.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../Navigationitems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Asux from '../../../hocs/Asux';

const sideDrawer = (props) => {
    let attachedClasses = ['side-drawer', 'close'];
    if (props.open) {
        attachedClasses = ['side-drawer', 'open'];
    }
    return (
        <Asux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(" ")}>
                <Logo height="11%"/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Asux>
    );
};

export default sideDrawer;