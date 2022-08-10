import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import '../css/navBar.css';

function NavBar({ menuOpen, setMenuOpen }) {

    return (
        <div className={'navBar ' + (menuOpen && 'navBar-active')}>
            <div className='nav-wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>genius.</a>
                    <div className='itemContainer'>
                        <PersonIcon className='icon'/>
                        <span>647-919-5824</span>
                    </div>
                    <div className='itemContainer'>
                        <MailIcon className='icon'/>
                        <span>joeycosentino24@gmail.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className={'hamburger ' + (menuOpen && 'hamburger-active')}>
                        <span className={'line1 ' + (menuOpen && 'line1-active')}></span>
                        <span className={'line2 ' + (menuOpen && 'line2-active')}></span>
                        <span className={'line3 ' + (menuOpen && 'line3-active')}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;