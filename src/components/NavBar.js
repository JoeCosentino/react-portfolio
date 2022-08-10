import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import '../scss/navBar.scss';

function NavBar({ menuOpen, setMenuOpen }) {

    return (
        <div className={'navBar ' + (menuOpen && 'active')}>
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
                    <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;