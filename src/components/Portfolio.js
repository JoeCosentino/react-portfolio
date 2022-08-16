import React from 'react';
import '../scss/portfolio.scss';

function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li>Featured</li>
                <li>Web app</li>
                <li>Mobile App</li>
                <li>Design</li>
                <li>Branding</li>
            </ul>
            <div className='container'>
                <div className='item'></div>
                <img src='' alt='' />
                <h3>Banking App</h3>
            </div>
        </div>
    )
}

export default Portfolio;