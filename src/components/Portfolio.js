import React, { useEffect, useState } from 'react';
import '../scss/portfolio.scss';
import PortfolioList from './PortfolioList';
import {
    frontEndPortfolio,
    backEndPortfolio,
    fullStackPortfolio,   
} from '../data';

function Portfolio() {

    const [selected, setSelected] = useState('frontend')
    const [data, setData] = useState([])

    const list = [
        {
            id: 'frontend',
            title: 'Front-End'
        },
        {
            id: 'backend',
            title: 'Back-end'
        },
        {
            id: 'fullstack',
            title: 'Full Stack'
        }
    ]

    useEffect(() => {
        switch(selected) {
            case 'frontend':
                setData(frontEndPortfolio);
                break;
            case 'backend':
                setData(backEndPortfolio);
                break;
            case 'fullstack':
                setData(fullStackPortfolio);
                break;
            default:
                setData(frontEndPortfolio);
        }
    })

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className='container'>
                {data.map(d=> (
                    <div className='item'>
                        <img src={d.img} alt='' />
                        <h3>{d.title}</h3>
                        <a href={d.gitHubLink}>
                            <div className='gitHubLink'>GitHub</div>
                        </a>
                        <a href={d.deployedLink}>
                            <div className='deployedLink'>Deployed</div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;