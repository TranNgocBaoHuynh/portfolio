import React from 'react'
import '../App.css';
import './CanvasSection.css';
import './Footer.css';
import { Link } from 'react-router-dom';

const sendMail = () => {
    const mailto: String =
        'mailto:thuynh30@asu.edu';
    window.location.href = mailto;
  }

  function Footer() {
    return (
        <div className='footer-container'>
                    
            <div class='canvas-night' >
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>     
                <div class="shooting_star"></div>   
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
            </div>

            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='social-icons'>
                    <Link
                            class='social-icon-link Resume'
                            to='/resume'
                            target='_self'
                            aria-label='Resume'
                            >
                            <i class='fa fa-file-alt' title='View My Resume' />
                        </Link>
                        <Link
                            class='social-icon-link Email'
                            to='#'
                            target='_self'
                            aria-label='Email'
                            >
                            <i class='fa fa-envelope' title='Email Me' onClick={sendMail}/>
                        
                        </Link>
                        <Link
                            class='social-icon-link Linkedin'
                            to = {{pathname:'https://www.linkedin.com/in/tran-huynh-6a0a0410b/'}}
                            target='_blank'
                            aria-label='LinkedIn'
                            >
                            <i class='fa fa-linkedin' title="Let's Connect! " />
                        </Link>
                    </div>

                    <small class='website-rights'>©Tran Huynh 2021</small>
                </div>
            </section>
        </div>
    )
}

export default Footer;