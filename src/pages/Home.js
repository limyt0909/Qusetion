import React from 'react';

import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import Slideshow from '../Slideshow/Slideshow';

import Img1 from '../images/home1.png';
import Img2 from '../images/home2.png';
import Img3 from '../images/home3.png';

const Home = () => {
  return (
    <div>
      <Top />
      <Slideshow />
      <img src={Img1} alt="1" />
      <img src={Img2} alt="2" />
      <img src={Img3} alt="3" />

      <Bottom />
    </div>
  );
};

export default Home;
