import React, { useContext } from 'react';

import Home from './Home';
import Profile from './Profile';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import NavBar from './NavBar';
import Context from './Context';

const Main = () => {
    const sliderArr = [<Home />, <Profile />, <Resume />, <Projects />, <Contact />];

    const { x, setX } = useContext(Context)

    const goLeft = () => {
        const nav = document.querySelector('.nav')
        if (x + 100 === 0) {
            nav.classList.add('nav--hidden')
        } else {
            nav.classList.remove('nav--hidden')
        }
        (x === 0) ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)

    }
    const goRight = () => {
        const nav = document.querySelector('.nav')
        console.log(nav)
        if (x + (100 * (sliderArr.length - 1)) === 0) {
            nav.classList.add('nav--hidden')
        } else {
            nav.classList.remove('nav--hidden')
        }
        (x === -100 * (sliderArr.length - 1)) ? setX(0) : setX(x - 100)
    }

    return (
        <>
            <div className='slider'>
                {sliderArr.map((item, index) => {
                    return (
                        <div key={index} className='slide' style={{ transform: `translateX(${x}%)` }}>
                            {item}
                        </div>
                    )
                })}
                <button id='left' onClick={goLeft}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button id='right' onClick={goRight}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <NavBar />
        </>
    )
}

export default Main