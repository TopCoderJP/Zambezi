import React from 'react';


import {SubHeading} from '../../components'
import {images} from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef"/>
    </div>
    <div className="app__wrapper_info">
        <SubHeading title="Chef's Word"/>
        <h1 className="headtext__cormorant" >What we believe in</h1>

        <div ClassName="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote"/>
          <p className="p__opensans">最高の食材が最高の料理を作ります。ニュージーランドと日本からの最高の肉を使用しています。</p>
          </div>
        <p className="p__opensans">地元産の鹿肉を時々使用しています。 秘密のスパイスはアフリカ、インド、中東からのものです。 また、多くの国からビールやワインを輸入しています</p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef</p>
          <img src={images.sign} alt="sign" />
        </div>
    </div>
  </div>
);

export default Chef;
