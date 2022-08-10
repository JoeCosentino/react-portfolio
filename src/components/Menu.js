import React from 'react';
import MenuItems from './MenuItems'
import '../scss/menu.scss';

function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <MenuItems setMenuOpen={setMenuOpen} />
            </ul>
        </div>
    )
}

export default Menu;