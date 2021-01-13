import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import Img1 from '../images/유관기관.png';
import Img2 from '../images/유관기관2.png';
import Img3 from '../images/유관기관3.png';

import styles from './Aboutaone.module.css';

const Resources4 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>유관기관 안내 </div>
      <img src={Img1} alt="유관기관1" />
      <img src={Img2} alt="유관기관2" />
      <img src={Img3} alt="유관기관3" />
      <Bottom />
    </div>
  );
};

export default Resources4;
