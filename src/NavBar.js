import React, { useContext } from 'react';
import { Link } from '@material-ui/core';

import Context from './Context';

const NavBar = () => {
    const { setX } = useContext(Context);
    return (
        <div className='nav nav--hidden'>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Link style={{ color: 'black', marginRight: '50px', fontFamily: 'Nanum Gothic, sans serif' }} component='button' onClick={() => {
                    setX(-100)
                }}>Profile</Link>
                <Link style={{ color: 'black', marginRight: '50px', fontFamily: 'Nanum Gothic, sans serif' }} component='button' onClick={() => {
                    setX(-200)
                }}>Resume</Link>
                <Link style={{ color: 'black', marginRight: '50px', fontFamily: 'Nanum Gothic, sans serif' }} component='button' onClick={() => {
                    setX(-300)
                }}>Projects</Link>
                <Link style={{ color: 'black', fontFamily: 'Nanum Gothic, sans serif' }} component='button' onClick={() => {
                    setX(-400)
                }}>Contact</Link>
            </div>
        </div>
    )
}

export default NavBar;