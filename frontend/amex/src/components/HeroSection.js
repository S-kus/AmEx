import React from 'react';
import './HeroSection.css';

function HeroSection({
}) {
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
          <img src='/images/home.jpeg'></img>
        </div>
        <div className='moto'>
          <p>We bring together people from all walks of life to<br/> become a part of a revolution.</p>
        </div>
      </div>
      <div className='team'>
        <h3>Great team is the key!</h3>
        <h4>Minimal will provide you support if you have any problems, our support team will<br/> reply within a day and we also have detailed documentation.</h4>
      </div>
    </>
  );
}

export default HeroSection;