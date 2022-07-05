import React from 'react';
import '../App.css';
import './IntroSection.css';
import {ButtonEmail} from './ButtonEmail'
import {ButtonProfile} from './ButtonProfile'

/*picture*/
import myPic from '../picture/myPic.jpg';

function IntroSection(){
    return(
        <div className="intro">
            <div className='intro-container'>
                <div className='intro-wrapper'>
                    <div className="intro-item">
                        <img alt="myPic" className="my-photo" src={myPic} />
                    
                         <div className="intro-item-content">
                            <h1> I will bring Doraemon into real life!</h1>
                                
                                <p> Hi, my name is Tran. I am a Cyber Security and AI Robotic Reseacher. I'm currently a Master student in Robotics 
                                    and Autonomous System (Artificial Intelligence) at Arizona State University. 
                                    I have gained numerous experiences and technologies as a research assistant and from my
                                    previous projects, so feel free to send me an email.    
                                </p>
                            <br></br>
                            <br></br>
                            <ButtonEmail 
                                className='btn' 
                                buttonSize='btn--primary'
                                buttonStyle='btn--outline'   
                            >
                                Email Me
                            </ButtonEmail>  

                            <ButtonProfile 
                                className='btn' 
                                buttonSize='btn--primary'
                                buttonStyle='btn--outline'
                            >
                                Read More
                            </ButtonProfile>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default IntroSection