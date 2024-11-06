import React, { useState } from 'react';

// assets
import { images } from '../assets/images';

// styles
import '../styles/accordion.scss';

const Accordion = ({ data, showItem }) => {
    const [show, setShow] = useState(showItem);

    const toggleAccordion = () => {
        setShow(!show);
    };

    return (
        <div className={`accordion ${show ? 'expand' : 'shrink'}`} onClick={toggleAccordion}>
            <div className="accordion-header">
                <div className='info-box'>
                    <div className='info-text'>
                        <div className='name'>{data.name.toUpperCase()}</div>
                        <div className='heading font-700'>{data.heading}</div>
                    </div>
                    <div className='info-icons'>
                        <div>
                            <img src={images.clock3} alt="time" className='icon' />
                            <div className='text'>{data.time}</div>
                        </div>
                        <div>
                            <img src={images.chartbar} alt="chartbar" className='icon' />
                            <div className='text'>{data.difficulty}</div>
                        </div>
                        <div>
                            <img src={images.document} alt="resource" className='icon' />
                            <div className='text'>{data.resources.length}</div>
                        </div>
                        <img src={images.arrow} alt="arrow-icon" className='icon' />
                    </div>
                </div>
                <div className='completion'>{data.completion}% Completed</div>
                <div className='completion-bar'>
                    <div style={{ width: `${data.completion}%` }} />
                </div>
            </div>
            {show && (
                <div className="accordion-content">
                    {
                        data.resources.map((item, index) => {
                            return (
                                <div className='resource-item-box' key={index}>
                                    <div className='resource-item'>
                                        <div>
                                            <img src={images[item.icon]} alt={item.icon} />
                                            <div className='font-700 resource-item-name'>{item.name}</div>
                                        </div>
                                        <div>
                                            <img src={images.clock2} alt="time" />
                                            <div className='resource-item-time'>{item.time}</div>
                                        </div>
                                    </div>
                                    <hr className='res-item-divider' style={index === data.resources.length - 1 ? { display: 'none' } : { display: 'block' }} />
                                </div>
                            )
                        })
                    }
                </div>
            )}
        </div>
    );
};

export default Accordion;
