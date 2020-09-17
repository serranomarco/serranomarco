import React from 'react';
import Typing from 'react-typing-animation';


const Home = () => {

    return (
        <div className='home-container' style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', position: 'absolute', top: '0', bottom: '0', right: '0', left: '0' }}>
            <div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Typing>
                    <p style={{ color: 'white', fontSize: '40px', marginBottom: '0px', textAlign: 'center' }}>Marco Serrano</p>
                    <p style={{ color: 'white', fontSize: '40px', textAlign: 'center' }}>Software Engineer</p>
                </Typing>
            </div>
        </div>
    )
}

export default Home