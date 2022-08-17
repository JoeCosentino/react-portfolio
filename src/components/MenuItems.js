import React from 'react';

function MenuItems({ setMenuOpen }) {
    return(
        <div onClick={()=>setMenuOpen(false)}>
            <li>
                <a href='#intro'>Home</a>
            </li>
            <li>
                <a href='#portfolio'>Portfolio</a>
            </li>
            <li>
                <a href='#works'>Works</a>
            </li>
            {/* <li>
                <a href='#testimonials'>Testimonials</a>
            </li> */}
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </div>
    )
}

export default MenuItems;