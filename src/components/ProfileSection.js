import React from 'react';
import './ProfileSection.css';
import Pacman from './Pacman';

function ProfileSection()
{
    return(
        <div className='profile'>
            <div className='profile-container'>

                <div className='profile-item-content'>
                    <h1>Education</h1>
                    <hr/>
                    <p>&#8227; Master of Science in Robotics and Autonomous System - Artificial Intelligence,
                          <b> Arizona State University</b>, United States (In Progress - Expected 2023).
                    </p>
                    
                    <p>&#8227; Bachelor of Science in Computer Science with Minor in Math, <b>California State University -
                         Sacramento</b>, United States, 2021.
                    </p>
                </div>
                <Pacman/>
                <div className='profile-item-content'>
                    <h1>Working Experience</h1>
                    <hr/>
                    <p>&#8227; Research Assistant, Computer Science Department, CSU Sacramento, 2019-2020.
                    </p>
                    <p>&#8227; Teacher Assistant, Computer Science Department, CSU Sacramento, 2019-2020.
                    </p>
                </div>
                <Pacman/>
                <div className='profile-item-content'>
                    <h1>Leadership Experience</h1>
                    <hr/>
                    <p>&#8227; President of Badminton Club, CSU Sacramento, 2019-2020.
                    </p>
                    <p>&#8227; Treasurer of Badminton Club, CSU Sacramento, 2018-2019.
                    </p>
                </div>
                <Pacman/>
                <div className='profile-item-content'>
                    <h1>Accomplishments and Community Services</h1>
                    <hr/>
                    <p>&#8227; Semi-Finalist (top 540/13,280) Cyber Fast Track, 2019.
                    </p>
                    <p>&#8227; Third Place in ICPC at Sac State, CSU Sacramento, 2019.
                    </p>
                    <p>&#8227; Excellence Human Energy Award by Chevron, Sacramento State Hornet Hacks, 2018.
                    </p>
                    <p>&#8227; Second Place in ACM Programming Contest, Arkansas State University, 2017.
                    </p>
                    <p>&#8227; Vietnamese Interpreter and Volunteer at South Sacramento pop-up Pannel Covid Vaccine, 2021.
                    </p>
                    <p>&#8227; Volunteer at World Language Day, Vietnamese Country Table Coordinator, CSU Sacramento, 2019.
                    </p>
                    <p>&#8227; Ghost writer for students with disablilities, Arkansas State University, 2017.
                    </p>
                </div>
                <Pacman />
                <div className='profile-item'>
                    <img alt='myPic2' className='my-photo2' src='/profile.JPG' />
                
                    <div className='fun-fact'>
                        <h1>Some Other Random Things About Me!</h1>

                        <p> &#8227;  Martial art plays an indispendable role in my life. I do Uechi Ryu Karate (Shodan - black belt),
                             Wushu, Eskrima, and Aikido. &#129355;
                        </p>
                        <p> &#8227; I am a sporty girl. I enjoy swimming, hiking, playing badminton, and soccer. &#127992; </p>
                        <p> &#8227; I love music. I play piano, flute, and kalimba. &#127929;</p>
                        <p> &#8227; I also love traveling and taking picture of the scenery and my family. &#128248;</p>
                    </div>
                </div>
            </div>

        </div>
        );
}

export default ProfileSection;