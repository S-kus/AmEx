import React from 'react';
import './HeroSection.css';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
function HeroSection() {
  return (
    <>
      <div>
      <div
        className='hero'
      >
        <div className='overlay'>
          <div className='content'>
            <h2><span>Who</span><br/>We are?</h2>
            <h3>With you we aim to create<br/>an inclusive space in Fintech</h3>
          </div>
        </div>
      </div>
      </div>
      <div className='home'>
        <div className='image'>
          <img src='/images/home.jpeg' alt='home'></img>
        </div>
        <div className='moto'>
          <p>We bring together people from all walks of life to<br/> become a part of a revolution.</p>
        </div>
      </div>
      <div className='team'>
        <h3>Great team is the key!</h3>
        <h4>Minimal will provide you support if you have any problems, our support team will<br/> reply within a day and we also have detailed documentation.</h4>
        <div className='teamSection'>
          <div className='teamCard'>
                <h2>Matt Murdock</h2>
                <h3>UI Designer</h3>
                <div className='teamimage'>
                  <img src='/images/av1.jpeg' alt='av1'></img>
                </div>
                <div className='socialIcon'>
                  <Link
                  className='social-icon-link'
                  to='/'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <FaFacebook />
                </Link>
                <Link
                  className='social-icon-link'
                  to='/'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <FaInstagram />
                </Link>
                <Link
                  className='social-icon-link'
                  to='/'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <FaTwitter />
                </Link>
                <Link
                  className='social-icon-link'
                  to='/'
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  <FaLinkedin />
                </Link>
                </div>
            </div>
            <div className='teamCard'>
                <h2>Matt Murdock</h2>
                <h3>UI Designer</h3>
                <div className='teamimage'>
                  <img src='/images/av1.jpeg' alt='av1'></img>
                </div>
                <div className='socialIcon'>
                  <Link
                  className='social-icon-link'
                  to='/'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <FaFacebook />
                </Link>
                <Link
                  className='social-icon-link'
                  to='/'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <FaInstagram />
                </Link>
                <Link
                  className='social-icon-link'
                  to='/'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <FaTwitter />
                </Link>
                <Link
                  className='social-icon-link'
                  to='/'
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  <FaLinkedin />
                </Link>
                </div>
            </div>
            <div className='teamCard'>
                <h2>Matt Murdock</h2>
                <h3>UI Designer</h3>
                <div className='teamimage'>
                  <img src='/images/av1.jpeg' alt='av1'></img>
                </div>
                <div className='socialIcon'>
                  <Link
                  className='social-icon-link'
                  to='/'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <FaFacebook />
                </Link>
                <Link
                  className='social-icon-link'
                  to='/'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <FaInstagram />
                </Link>
                <Link
                  className='social-icon-link'
                  to='/'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <FaTwitter />
                </Link>
                <Link
                  className='social-icon-link'
                  to='/'
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  <FaLinkedin />
                </Link>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;