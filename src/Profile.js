import React from 'react';

const Profile = () => {
    return (
        <div style={{ backgroundColor: 'black', position: 'absolute', top: '70px', left: '0px', right: '0px', bottom: '0px', display: 'flex' }}>
            <img style={{ width: '40%', height: '80%', maxWidth: '500px', maxHeight: '800px', display: 'flex', alignSelf: 'center', marginLeft: '10%' }} alt='marco-serrano' src='https://spotify-clone-app.s3-us-west-2.amazonaws.com/IMG_2459.JPG' />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ overflowY: 'scroll', backgroundColor: 'white', marginRight: '20%', marginLeft: '40px', borderRadius: '5px', padding: '10px', height: '80%', boxSizing: 'border-box' }}>
                    <p style={{ fontSize: '30px', color: 'black', textAlign: 'center' }}>A little about me...</p>
                    <p style={{ color: 'black', padding: '10px', marginBottom: '0px' }}>
                        <span style={{ marginLeft: '40px' }}></span>Coding is like one giant puzzle just waiting to be solved. One of my fondest memories growing up was doing the 5000 piece jigsaw puzzles with my mom. I loved problem solving whether it was in math or puzzles like the ones I mentioned and I never feared a challenging problem. Ultimately, this is what led me to my career choice in software. What really intrigued me was that many different people could be given the same problem, however that solution would vary greatly from person to person. Hello my name is Marco Serrano and I am a Software Engineer from Portland, Oregon excited to contribute to a vast community of developers.
                    </p>

                    <p style={{ color: 'black', padding: '10px', margin: '0' }}><span style={{ marginLeft: '40px' }}></span>In my spare time I enjoy playing and watching a lot of basketball. Being from Portland my home team happens to be the Blazers, but I also really enjoy watching the Los Angeles Lakers because they were the first team that made me fall in love with the sport as a kid. I also really enjoy hiking especially due to the fact that I am from the Pacific Northwest, the best part is making it to the end of a difficult hike and being able to enjoy the beautiful scenery.  Other than that I am always learning something new whether it be a technology or just expanding my  overall knowledge in my field, which is a big reason why I chose to be a lifelong learner and a Software Engineer as a career. Thank you for taking the time to find my portfolio, please look through my resume and projects while you're here!</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;