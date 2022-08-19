import React, { useEffect, useState } from 'react';
import '../scss/portfolio.scss';
import PortfolioList from './PortfolioList';
import {
    reactPortfolio,
    databasePortfolio,
    fullStackPortfolio,
    teamPortfolio,
    javaScriptPortfolio    
} from '../data';

function Portfolio() {

    const [selected, setSelected] = useState('react')
    const [data, setData] = useState([])

    const list = [
        {
            id: 'react',
            title: 'React'
        },
        {
            id: 'database',
            title: 'Database'
        },
        {
            id: 'fullstack',
            title: 'Full Stack'
        },
        {
            id: 'team',
            title: 'Team Projects'
        },
        {
            id: 'javascript',
            title: 'JavaScript'
        }
    ]

    useEffect(() => {
        switch(selected) {
            case 'react':
                setData(reactPortfolio);
                break;
            case 'database':
                setData(databasePortfolio);
                break;
            case 'fullstack':
                setData(fullStackPortfolio);
                break;
            case 'team':
                setData(teamPortfolio);
                break;
            case 'javascript':
                setData(javaScriptPortfolio);
                break;
            default:
                setData(reactPortfolio);
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
                        <a href={d.link}>
                            <img src={d.img} alt='' />
                        </a>
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;