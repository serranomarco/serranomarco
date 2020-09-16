import React from 'react';

const Profile = () => {
    return (
        <div style={{ backgroundColor: 'black', position: 'absolute', top: '70px', left: '0px', right: '0px', bottom: '0px', display: 'flex' }}>
            <img style={{ width: '40%', height: '80%', maxWidth: '500px', maxHeight: '800px', display: 'flex', alignSelf: 'center', marginLeft: '40px' }} alt='marco-serrano' src='https://spotify-clone-app.s3-us-west-2.amazonaws.com/IMG_2459.JPG' />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1 style={{ color: 'white', marginRight: '100px', marginLeft: '40px' }}>whoami</h1>
                <p style={{ color: 'white', marginRight: '100px', marginLeft: '40px' }}>
                    Hello my name is Marco Serrano and to me,
                    coding is like one giant puzzle except there isn’t just one solution.
                    Two different people will almost always have a vastly different answer
                    which is what intrigues me the most. I am a 22 year old Software Engineer
                    from Portland, Oregon excited to contribute to vast community of developers.
                    In my spare time I like to spend time playing and watching basketball. I also
                    really enjoy learning new technologies and overall just expanding my knowledge.
                    Thank you for taking the time to scroll through my portfolio and my past projects
                    which I enjoyed putting together.
                </p>
            </div>
        </div>
    )
}

export default Profile;