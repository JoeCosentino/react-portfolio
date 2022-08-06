import React from 'react';
import '../css/navBar.css';

function NavBar() {
    return (
        <div className='navBar'>
            <div className='nav-wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>genius.</a>
                </div>
                <div className='right'></div>
            </div>
        </div>
    )
}

export default NavBar;