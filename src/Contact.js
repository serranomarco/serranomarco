import React from 'react';
const Contact = () => {
    return (
        <div style={{ backgroundColor: 'black', position: 'absolute', top: '70px', left: '0px', right: '0px', bottom: '0px', padding: '20px 10%', display: 'grid', gridTemplateColumns: '1fr 2fr'  }}>
            <div style={{ height: '95%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ backgroundColor: 'white', borderRadius: '5px', width: '310px', padding: '20px', marginBottom: '20px', height: '33%' }}>
                    <h1>Contact Me:</h1>
                    <p>Down below are my social media links, feel free to reach out or send me an email!</p>
                </div>
                <div style={{ backgroundColor: 'white', borderRadius: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '20px', width: '310px', height: '67%' }}>
                    <a style={{ color: 'black', fontSize: '40px', textDecoration: 'none' }} target='_blank' rel='noopener noreferrer' href="mailto: serranomarco@hotmail.com">
                        <i class="far fa-envelope"></i>
                        <span className='links' style={{ color: 'black' }}> Email</span>
                    </a>
                    <a style={{ color: 'black', fontSize: '40px', textDecoration: 'none' }} target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/marco-serrano-3916731b2/">
                        <i class="fab fa-linkedin" />
                        <span className='links' style={{ color: 'black' }}> LinkedIn</span>
                    </a>
                    <a style={{ color: 'black', fontSize: '40px', textDecoration: 'none' }} target='_blank' rel='noopener noreferrer' href="https://angel.co/u/marco-serrano-2">
                        <i class="fab fa-angellist"></i>
                        <span className='links' style={{ color: 'black' }}> AngelList</span>
                    </a>
                    <a style={{ color: 'black', fontSize: '40px', textDecoration: 'none' }} target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/serranomarco_/">
                        <i class="fab fa-instagram"></i>
                        <span className='links' style={{ color: 'black' }}> Instagram</span>
                    </a>
                    <a style={{ color: 'black', fontSize: '40px', textDecoration: 'none' }} target='_blank' rel='noopener noreferrer' href="https://github.com/serranomarco">
                        <i class="fab fa-github"></i>
                        <span className='links' style={{ color: 'black' }}> GitHub</span>
                    </a>
                </div>

            </div>
            <div style={{ marginLeft: '30px'}}>
                <img alt='coding' style={{ width: '100%', height: '95%' }} src='https://assets.entrepreneur.com/content/3x2/2000/20150708172005-coding-working-workspace-apple-macintosh.jpeg?width=600&crop=16:9' />
            </div>
        </div>
    )
}

export default Contact;