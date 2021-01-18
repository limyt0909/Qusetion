import React from 'react';

import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Slideshow from '../Slideshow/Slideshow';

import Homes1 from '../Homes/Homes1';
import Homes2 from '../Homes/Homes2';
import Homes3 from '../Homes/Homes3';

import Img1 from '../images/home1.png';
import Img2 from '../images/home2.png';
import Img3 from '../images/home3.png';

const Home = () => {
  return (
    <div>
      <Top />
      <Slideshow />
      <Homes3 />
      <Homes2 />
      <Bottom />
    </div>
  );
};

export default Home;
