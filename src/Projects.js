import React from 'react';

const Projects = () => {

    return (
        <div style={{ backgroundColor: 'black', position: 'absolute', top: '70px', left: '0px', right: '0px', bottom: '0px', padding: '20px 10%', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
            <div>
                <div style={{ backgroundColor: 'white', marginRight: '20px', marginBottom: '20px', padding: '20px', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1 style={{ margin: '0' }}>HikeTrack</h1>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <a href='https://hike-track.herokuapp.com/' target='_blank' rel='noopener noreferrer' style={{ marginRight: '5px' }}>Live</a>
                            <p style={{ margin: '0' }}>|</p>
                            <a href='https://github.com/serranomarco/hike-track-frontend' target='_blank' rel='noopener noreferrer' style={{ marginLeft: '5px' }}>GitHub</a>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img style={{ marginTop: '20px', height: '25vh', width: '25vw' }} alt='hiketrack' src='https://spotify-clone-app.s3-us-west-2.amazonaws.com/hiketrack-demo.gif' />
                </div>
            </div>
            <div>
                <div style={{ backgroundColor: 'white', marginBottom: '20px', borderRadius: '5px', padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1 style={{ margin: '0' }}>Spoofify</h1>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <a href='https://spotify-clone-aa-react.herokuapp.com/' target='_blank' rel='noopener noreferrer' style={{ marginRight: '5px' }}>Live</a>
                            <p style={{ margin: '0' }}>|</p>
                            <a href='https://github.com/serranomarco/spotify-clone' target='_blank' rel='noopener noreferrer' style={{ marginLeft: '5px' }}>GitHub</a>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img style={{ marginTop: '20px', height: '25vh', width: '25vw' }} alt='spoofify' src='https://spotify-clone-app.s3-us-west-2.amazonaws.com/spoofify-demo.gif' />
                </div>
            </div>
            <div>
                <div style={{ backgroundColor: 'white', marginRight: '20px', borderRadius: '5px', padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1 style={{ margin: '0' }}>Endless</h1>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <a href='https://endless-tumblr.herokuapp.com/' target='_blank' rel='noopener noreferrer' style={{ marginRight: '5px' }}>Live</a>
                            <p style={{ margin: '0' }}>|</p>
                            <a href='https://github.com/serranomarco/frank-ocean-tumblr-frontend' target='_blank' rel='noopener noreferrer' style={{ marginLeft: '5px' }}>GitHub</a>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img style={{ marginTop: '20px', height: '25vh', width: '25vw' }} alt='endless' src='https://spotify-clone-app.s3-us-west-2.amazonaws.com/endless-demo.gif' />
                </div>
            </div>
            <div>
                <div style={{ backgroundColor: 'white', borderRadius: '5px', padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1 style={{ margin: '0' }}>Pikagram</h1>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <a href='https://cryptic-meadow-61382.herokuapp.com/' target='_blank' rel='noopener noreferrer' style={{ marginRight: '5px' }}>Live</a>
                            <p style={{ margin: '0' }}>|</p>
                            <a href='https://github.com/chaunceykm/PikaGram' target='_blank' rel='noopener noreferrer' style={{ marginLeft: '5px' }}>GitHub</a>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img style={{ marginTop: '20px', height: '25vh', width: '25vw' }} alt='pikagram' src='https://spotify-clone-app.s3-us-west-2.amazonaws.com/pikagram-demo.gif' />
                </div>
            </div>
        </div>
    )
}

export default Projects;