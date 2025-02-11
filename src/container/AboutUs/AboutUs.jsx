import React from 'react';

import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter"/>
      </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
        <p className="p__opensans">私たちは家族経営の会社です。 同社は、日本の友人や家族のために長年ビルトンを作った後に設立されました。</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    
          <div className="app__aboutus-content_knife flex__center">
            <img src={images.knife} alt="about_knife"/>
          </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> 私は子供の頃、最初にビルトンを食べました。 ビルトンの美味しさも日本人に楽しんでもらいたいと思いました。</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      </div>
  </div>
);

export default AboutUs;
