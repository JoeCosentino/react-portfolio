import React, { useEffect, useRef } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from 'ityped';
import '../scss/intro.scss';

function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,
            { 
                showCursor: true,
                strings: ["React", "JavaScript", "MySql", "MongoDB", "Node.js" ],
                backDelay:  1500,
            });
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imageContainer'>
                    <img src='assets/me.jpg' alt='' />
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi there, I'm</h2>
                    <h1>Joe Cosentino</h1>
                    <h3>Full Stack Web Developer: <span ref={textRef}></span></h3>
                </div>
                <a href='#portfolio'>
                    <KeyboardArrowDownIcon sx={{ fontSize: 70 }} className='down-arrow'/>
                </a>
            </div>
        </div>
    )
}

export default Intro;