import React, { useState } from 'react';

// assets
import { images } from '../assets/images';

// styles
import '../styles/mainContent.scss';

// data
import { chapter as resource } from '../data/resources';

// components
import Accordion from './accordion';

const tabs = [
    { name: 'Mentor Sessions', icon: 'calendar' },
    { name: 'Learning Material', icon: 'briefcase' },
];

const chapters = [
    { name: 'Chapter 1', time: '05:00:00' },
    { name: 'Chapter 2', time: '12:00:00' },
    { name: 'Chapter 3', time: '03:00:00' },
    { name: 'Chapter 4', time: '06:00:00' },
    { name: 'Chapter 5', time: '01:00:00' },
];

const MainContent = ({ showMenu }) => {
    const [activeItem, setActiveItem] = useState(1);
    const [activeChapter, setActiveChapter] = useState(0);

    return (
        <main className={`main-content font-400 ${showMenu ? 'shrink' : 'expand'}`}>
            <div className='header'>
                <div className='tabs'>
                    {
                        tabs.map((item, index) => {
                            return (
                                <div key={index} className={`tab-btn ${index === activeItem ? "btn-fill font-700" : ""}`}>
                                    <img
                                        src={images[item.icon]}
                                        alt={images[item.icon]}
                                        className='icon'
                                    />
                                    <span className='text'>{item.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='btn-outline'>
                    <img
                        src={images.info}
                        alt={images.info}
                        className='icon'
                    />
                    <span className='text'>How it works</span>
                </div>
            </div>
            <hr className='divider' />
            <div className='course-content'>
                <div className='chapter-index-col'>
                    {
                        chapters.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className={`chapter-index ${activeChapter === index ? "active" : ""}`}>
                                        <div className={`chapter-name ${activeChapter === index ? "font-700" : ""}`}>{item.name}</div>
                                        <div className={`time-box ${activeChapter === index ? "active" : ""}`}>
                                            <img src={images.clock1} alt="clock" className='icon' />
                                            <div className='chapter-time'>{item.time}</div>
                                        </div>
                                    </div>
                                    <hr className={`divider ${activeChapter === index ? "inactive" : ""}`} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='chapters'>
                    {
                        resource.map((item, index) => {
                            return (
                                <Accordion key={index} data={item} showItem={index === 0 ? true : false} />
                            )
                        })
                    }
                </div>
            </div>
        </main>
    );
};

export default MainContent;
