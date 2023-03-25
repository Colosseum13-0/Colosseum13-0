import React from 'react';
import './style2.css';

function OurTeamSection() {
  return (
    <section className="team">
      <h1 className="title" style={{fontSize: '8vw', overflow: 'hidden'}}>our team</h1>
      <div className="team-row">
        <div className="member">
          <img src="https://i.ibb.co/QJ9x6cT/Vedansh-Dubey-photoaidcom-cropped.png" alt="" />
          <h2>Vedansh Dubey</h2>
          <p>Front-end web developer, NLP and Machine Learning Enthusiast</p>
        </div>
        <div className="member">
          <img src="https://i.ibb.co/hd9642t/Whats-App-Image-2023-03-12-at-12-16-20-AM-photoaidcom-cropped.png" alt="" />
          <h2>Divya Dhage</h2>
          <p>Android App developer, Loves to solve coding problems</p>
        </div>
        <div className="member">
          <img src="https://i.ibb.co/8xR3DtN/badar-photoaidcom-cropped.png" alt="" />
          <h2>Abhishek Badar</h2>
          <p>Front-end web developer, Intense about graphics technology</p>
        </div>
      </div>
    </section>
  );
}

export default OurTeamSection;
