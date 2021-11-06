import React from 'react';
import '../App.css';
import './ProjectSection.css';

import FlipCard from './FlipCard';

/*Image*/
import img1 from '../picture/crypto.jpg';
import img2 from '../picture/sec_tutor.jpg';
import img10 from '../picture/linux.jpg';
import img3 from '../picture/steg.png';
import img4 from '../picture/luoshu.jpg';
import img5 from '../picture/queens.png';
import img6 from '../picture/yelp.jpg';
import img7 from '../picture/network.jpg';
import img8 from '../picture/cifar.webp';
import img9 from '../picture/vti.png';
import img11 from '../picture/Pacman.png';
/*------*/

var cardStyle = {
    margin: "0 1rem"
  };

  const cards = [
    {
      id: "11",
      path: 'https://gitfront.io/r/user-5059495/3024490bd3246e769ad8519794969412d34a9115/AI-Pacman-Agent/',
      front:{
        image: img11,
        title: "Artificial Intelligence Pacman Agent"
      },
      back:{
        detail:"Applying Artificial Intelligence techniques to play Pacman. Implementing informed state-space search to solve navigation and traveling problems,\
        minimax and expectimax to solve adversarial and a stochastic search problem, and\
        Reinforcement Learning Pacman Agent."
      }
    },
  
    {
      id: "4",
      path:'https://gitfront.io/r/user-5059495/6738c48213ff3ee2e7edee38597abd098da39441/Optimizing-the-Magic-Square-Problem-Using-Genetic-Algorithms-with-DEAP-and-CNN/',
      front: { 
        image: img4,  
        title: "Optimizing the Magic Square Problem Using Genetic Algorithm with DEAP and CNN"},
      back: {
        detail: "Using Genetic Algorithm and Hybrid model (CNN as Fitness function) to solve magic square problem. Compare the result of different approaches."
      }
    },
    {
      id: "7",
      path:'https://github.com/TranNgocBaoHuynh/Network-Intrusion-Detection-System.git',
      front: { 
        image: img7,  
        title: "Network Intrusion Detection System"},
      back: {
        detail: "Using Fully-Connected and Convolution Neural Network models to build an AI-based Network\
         Intrusion Detection System that is able to distinguish between good and bad connections."
      }
    },
    {
      id: "8",
      path:'https://github.com/TranNgocBaoHuynh/Computer-Vision-and-Image-Classification-Using-GPU-and-Transfer-Learning.git',
      front: { 
        image: img8,  
        title: "Computer Vision and Image Classification Using GPU and Transfer Learning"},
      back: {
        detail: "Using CIFAR-10 dataset and CNN models with and without transfer learning to perform the image\
         classification on the Google GPU."
      }
    },
    {
      id: "1",
      path:'https://gitfront.io/r/user-5059495/5762c67f2878b8a7a90e8f8d43d1b2f5e9805955/Analyzing-the-Efficiency-of-Lightweight-Symmetric-Ciphers-on-IoT-Devices/',
      front: { 
        image: img1,  
        title: "Analyzing the Efficiency of Lightweight Symmetric Ciphers on IoT Devices"},
      back: {
        detail: "Analyzing the performance of several popular lightweight stream and block ciphers on Raspberry Pi 4 Model B."
      }
    },
    {
      id: "2",
      path:'/',
      front: { 
        image: img2,  
        title: "Sec Tutor"},
      back: {
        detail: "An online ITS (Intelligence Tutoring System) learning tool to educate students about security\
         misconceptions and secure programming. The application is developed using Python, Django, HTML, JS, and CSS."
      }
    },
    {
      id: "10",
      path:'https://gitfront.io/r/user-5059495/170f45aa2c514b0bc2016f390428ac4a7afc5e3b/Is-Linux-a-Malware-Free-OS/',
      front: { 
        image: img10,  
        title: "Is Linux malware free OS?"},
      back: {
        detail: "Providing some vulnerabilities and performing several attacks toward the Linux Operating System\
         to show that it is not as safe as people thought."
      }
    },
    {                                  
      id: "3",
      path:'https://github.com/baotran1905/CSC-153---Final-Project--Jsteg.git',
      front: { 
        image: img3,  
        title: "Jsteg - Simple Image Steganography Utility for Data Hiding"},
      back: {
        detail: "A simple program that conceal an arbitrary amount of data inconspicuously. Secret messages will\
         be encrypted using block cipher in GCM, then split and hidden in multiple files on the digital camera SD card."
      }
    },
    {
      id: "5",
      path:'https://github.com/TranNgocBaoHuynh/Solving-N-Queens-Problem-using-Genetic-Algorithms.git',
      front: { 
        image: img5,  
        title: "Solving N-Queens Problem using Genetic Algorithms"},
      back: {
        detail: "Applying the genetic algorithm utilizing the DEAP library to solve the \"n-queens\" problem,\
         which involves placing \"n\" number of queens in an \"nxn\" board in such a way that no queens are attacking\
          each other."
      }
    },
    {
      id: "6",
      path:'https://github.com/TranNgocBaoHuynh/Yelp-business-rating-prediction.git',
      front: { 
        image: img6,  
        title: "Yelp Business Rating Prediction using Tensorflow"},
      back: {
        detail: "Using Tensorflow to predict a business’s star rating based on all of Yelp’s review text for tha\
         business in other to determine the best neural network implementation for evaluating a business’s star rating."
      }
    },
    {
      id: "9",
      path:'/',
      front: { 
        image: img9,  
        title: "Voice To Image - VTI"},
      back: {
        detail: "A small web app that receives words (spoken by user) and transfers them to image.\
         The goal of application is to help children with autism to communicate,\
          learn, and remember easier. The application is implemented using HTML,\
           CSS, and JavaScript."
      }
    },
]

function ProjectSection() {
    return(
        <div className='proj'>
            <div className='proj-container'>
                <div className='proj-wrapper'>
                    <h1>My Researches / Projects</h1>
                   
                    <ul className="proj-item" style={cardStyle}>
                            {cards.map((card) => (
                            <FlipCard key={card.id} card={card} />
                            ))}
                    </ul> 
                  </div>
            </div>
        </div>

    )
}

export default ProjectSection