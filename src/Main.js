import React, { useState } from 'react';

import Home from './Home';
import Profile from './Profile';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => {
    const sliderArr = [<Home />, <Profile />, <Projects />, <Resume />];
    const [x, setX] = useState(0)

    const goLeft = () => {
        (x === 0) ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)

    }
    const goRight = () => {
        (x === -100 * (sliderArr.length - 1)) ? setX(0) : setX(x - 100)
    }
    return (
        <div className='slider'>
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} className='slide' style={{ transform: `translateX(${x}%)` }}>
                        {item}
                    </div>
                )
            })}
            <button id='left' onClick={goLeft}>
                <i class="fas fa-chevron-left"></i>
            </button>
            <button id='right' onClick={goRight}>
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default Main