import React from 'react';

const Profile = () => {
    return (
        <div style={{ backgroundColor: 'black', position: 'absolute', top: '70px', left: '0px', right: '0px', bottom: '0px', display: 'flex' }}>
            <img style={{ width: '40%', height: '80%', maxWidth: '500px', maxHeight: '800px', display: 'flex', alignSelf: 'center', marginLeft: '10%' }} alt='marco-serrano' src='https://spotify-clone-app.s3-us-west-2.amazonaws.com/IMG_2459.JPG' />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ backgroundColor: 'white', marginRight: '19%', marginLeft: '40px', borderRadius: '5px', padding: '10px' }}>
                    <p style={{ fontSize: '30px', color: 'black', textAlign: 'center' }}>whoami</p>
                    <p style={{ color: 'black', padding: '10px' }}>
                        Hello my name is Marco Serrano and to me,
                        coding is like one giant puzzle except there isn’t just one solution.
                        Two different people will almost always have a vastly different answer
                        which is what intrigues me the most. I am a 22 year old Software Engineer
                        from Portland, Oregon excited to contribute to a vast community of developers.
                        In my spare time I like to spend time playing and watching a lot of basketball. I also
                        really enjoy learning new technologies and overall just expanding my knowledge in my
                        field, which is a big reason why I chose Software Engineering as a career.
                        Thank you for taking the time to find my portfolio, please look
                        through my resume and projects while you're here!
                </p>
                </div>
            </div>
        </div>
    )
}

export default Profile;