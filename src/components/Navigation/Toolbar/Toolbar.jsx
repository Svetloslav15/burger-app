import React from 'react';
import './Toolbar.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../Navigationitems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className="toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <Logo />
        <nav className="desktop-only">
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;