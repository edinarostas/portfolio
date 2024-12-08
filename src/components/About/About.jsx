import React from 'react';
import PrfilePhoto from '../../assets/images/headshot.jpg';
import './About.scss';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <div className='about__header'>
            <img 
              className="about__profile-picture" 
              src={PrfilePhoto} 
              alt="Profile Picture" 
            />
            <h1 className="about__title">Hi there, I'm Edina.</h1>
          </div>
          <p className="about__description">
            I’m a self-taught Full-Stack Developer turned into Bootcamp graduate, combining hands-on coding expertise with a BSc in Product Management, ready to bridge the gap between innovative tech solutions and user-focused product strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
