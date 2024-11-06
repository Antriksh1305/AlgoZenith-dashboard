import React, { useState } from 'react';

// assets
import { images } from '../assets/images';

// styles
import '../styles/sidebar.scss';

const sideNavItems = [
    { name: 'Dashboard', icon: 'dashboard' },
    { name: 'Learn', icon: 'learn' },
    { name: 'Forums', icon: 'forums' },
    { name: 'Upskill', icon: 'upskill' },
    { name: 'Contest', icon: 'contest' },
    { name: 'Leaderboard', icon: 'leaderboard' },
]

const Sidebar = ({ showMenu }) => {
    const [activeItem, setActiveItem] = useState('Upskill');

    return (
        <div className={`sidebar ${showMenu ? 'open' : 'closed'}`}>
            {
                sideNavItems.map((item, index) => (
                    <div key={index} className={`side-nav-item font-400 ${activeItem === item.name && "active"}`}>
                        <img
                            src={images[item.icon]}
                            alt={item.name}
                            className="icon"
                        />
                        <span className={`text ${activeItem === item.name && "active font-700"}`}>{item.name}</span>
                    </div>
                ))
            }
        </div>
    );
};

export default Sidebar;
