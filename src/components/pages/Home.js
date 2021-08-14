import React from 'react';
import '../../App.css';
import CanvasSection from '../CanvasSection';
import IntroSection from '../IntroSection';
import ProjectSection from '../ProjectSection';
import SkillSection from '../SkillSection';
import Footer from '../Footer';

function Home()
{
    return (
        <>
          <CanvasSection />
          <div class='upper-section'>
            <IntroSection  />
          </div>
          <div class='lower-section section-divider'>
            <ProjectSection  />
          </div>
          <SkillSection />
          <Footer/>
        </>
    )
}

export default Home;