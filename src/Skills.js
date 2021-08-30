import React from 'react';
import resume from './resume.pdf';

const Skills = () => {
    return (
        <div style={{ backgroundColor: 'black', position: 'absolute', top: '70px', left: '0px', right: '0px', bottom: '0px', padding: '20px 10%', display: 'grid', gridTemplateRows: '1fr 2fr 2fr' }}>
            <div style={{ backgroundColor: 'white', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '5px', marginBottom: '10px' }}>
                <h1>Resume</h1>
                <div style={{ width: '100%', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <p>Have a look at my resume while you're here!</p>
                    <a href={resume} target='_blank' rel='noopener noreferrer'>Click here to view resume</a>
                </div>
            </div>
            <div style={{ backgroundColor: 'white', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '5px', marginBottom: '10px' }}>
                <h1>Languages</h1>
                <div style={{ width: '100%', height: '50%', display: 'flex', justifyContent: 'space-around' }}>
                    <img style={{ height: '10vh' }} alt="HTML5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HTML5_logo_resized.svg/256px-HTML5_logo_resized.svg.png" />
                    <img style={{ height: '10vh' }} alt="CSS3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/256px-CSS3_logo_and_wordmark.svg.png" />
                    <img style={{ height: '10vh' }} alt="Javascript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/256px-Javascript-shield.svg.png" />
                    <img style={{ height: '10vh' }} alt="Python" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" />
                </div>
            </div>
            <div style={{ backgroundColor: 'white', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '5px', marginBottom: '10px' }}>
                <h1>Technologies</h1>
                <div style={{ width: '100%', height: '50%', display: 'flex', justifyContent: 'space-around' }}>
                    <img style={{ height: '10vh' }} alt="Postgresql" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png" />
                    <img style={{ height: '10vh' }} alt="Postgresql" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/512px-Postgresql_elephant.svg.png" />
                    <img style={{ height: '10vh' }} alt="React" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" />
                    <img style={{ height: '10vh' }} alt="Express" src="https://img2.pngio.com/express-js-png-5-png-image-expressjs-png-800_800.png" />
                    <img style={{ height: '10vh' }} alt="Flask" src="https://www.pngkey.com/png/full/98-985032_flask-logo-flask-python-icon.png" />
                    <img style={{ height: '10vh' }} alt="Docker" src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png" />
                </div>
            </div>
        </div>
    )
}

export default Skills