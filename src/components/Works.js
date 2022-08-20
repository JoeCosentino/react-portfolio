import React, { useState } from 'react';
import '../scss/works.scss';
import StorageIcon from '@mui/icons-material/Storage';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
          id: "1",
          icon: <ComputerIcon className='icon-img' sx={{ fontSize: 90 }}/>,
          title: "Web Design",
          desc:
            "utilize front-end technologies to create intuitive user experiences ",
          img:
            "https://t3.ftcdn.net/jpg/02/98/11/76/240_F_298117627_neaI5EvfL3VGOPHKevRhUkTK1i7l9man.jpg"
        },
        {
          id: "2",
          icon:  <StorageIcon className='icon-img' sx={{ fontSize: 90 }}/>,
          title: "Data Driven",
          desc:
            "Ability to work with data and back-end technologies to excel the production of application",
          img:
            "https://as1.ftcdn.net/v2/jpg/00/94/35/34/1000_F_94353427_D7W5w2QybxknMcnGvn0tY8x3lxSxa81d.jpg",
        },
        {
          id: "3",
          icon: <SchoolIcon className='icon-img' sx={{ fontSize: 90 }}/>,
          title: "Continuous Learning",
          desc:
            "Ability and desire to learn cutting edge technologies, as required",
          img:
            "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ];

      const handleClick = way => {
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) : setCurrentSlide(currentSlide < data.length -1 ? currentSlide +1 : 0);
      }

    return (
        <div className='works' id='works'>
            <div
                className='slider'
                style={{transform: `translateX(-${currentSlide *100}vw)`}}
            >
                {data.map((d) => (
                <div className='container'>
                    <div className='item'>
                        <div className='left'>
                            <div className='leftContainer'>
                                <div className='imgContainer'>
                                    {d.icon}
                                </div>
                                <h2 className='title'>{d.title}</h2>
                                <p className='desc'>
                                    {d.desc}
                                </p>
                            </div>
                        </div>
                        <div className='right'>
                            <img src={d.img} />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <ChevronLeftIcon
                sx={{ fontSize: 125 }}
                className='arrow left'
                onClick={() => handleClick('left')}
            />
            <ChevronRightIcon
                sx={{ fontSize: 125, fontWeight: 100 }}
                className='arrow right'
                onClick={() => handleClick()}
            />
        </div>
    )
}

export default Works;