import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import Img1 from '../images/소식.png';
import Img2 from '../images/소식2.png';

import styles from './Aboutaone.module.css';

const Education3 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>A-One 소식 </div>
      <div class="container">
        <br />

        <img src={Img1} alt="1" />
        <img src={Img2} alt="2" />
        <br />
        <br />
      </div>
      <Bottom />
    </div>
  );
};

export default Education3;
