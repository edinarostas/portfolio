import React, { useEffect, useState } from 'react';
import PrfilePhoto from '../../assets/images/headshot.jpg';
import './About.scss';

const About = () => {
  const [headerText, setHeaderText] = useState('');
  const [contentText, setContentText] = useState('');
  
  const headerFullText = "Hi there, I'm Edina.";
  const contentFullText = `As a self-taught Full-Stack Developer and Bootcamp graduate with a BSc in Product Management, I bring a unique blend of technical expertise and a strategic understanding of user-centric product development.

  I’m passionate about creating innovative tech solutions that bridge the gap between development and real-world impact, with a strong focus on both code and the user experience. 
  
  My deep interest in AI technologies, especially Large Language Models (LLMs) and Retrieval Augmented Generation (RAG), drives me to push the boundaries of what’s possible in tech.`;

  useEffect(() => {
    let headerIndex = 0;
    const typingHeaderInterval = setInterval(() => {
      if (headerIndex < headerFullText.length) {
        const nextChar = headerFullText.charAt(headerIndex);
        setHeaderText((prev) => prev + nextChar);
        headerIndex++;
      } else {
        clearInterval(typingHeaderInterval);

        // After header is typed out, start typing content
        let contentIndex = 0;
        const typingContentInterval = setInterval(() => {
          if (contentIndex < contentFullText.length) {
            const nextChar = contentFullText.charAt(contentIndex);
            setContentText((prev) => prev + nextChar);
            contentIndex++;
          } else {
            clearInterval(typingContentInterval);
          }
        }, 50);
      }
    }, 100);

    return () => clearInterval(typingHeaderInterval);
  }, []);

  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__header">
            <img
              className="about__profile-picture"
              src={PrfilePhoto}
              alt="Profile Picture"
            />
            <h1 className="about__title">{headerText}</h1>
          </div>
          <div className="about__description">
            <p>{contentText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
