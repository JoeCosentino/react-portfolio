import React, { useState } from 'react';
import '../scss/works.scss';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
          id: "1",
          icon: <PhoneIphoneIcon className='phone-img' sx={{ fontSize: 90 }}/>,
          title: "Web Design",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "Mobile Application",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: "./assets/writing.png",
          title: "Branding",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
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
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className='right'>
                            <img src="https://cdn.dribbble.com/users/1998175/screenshots/15459384/media/48ac2b43ebe81ba0866afea1383cc939.png?compress=1&resize=1200x900" alt='' />
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