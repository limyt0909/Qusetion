import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/인사제도.png';
import Img2 from '../images/인사제도2.png';
import styles from './Aboutaone.module.css';

const Aboutaone8 = () => {
  return (
    <div>
      <Top />
      <div className={styles.down}>인사제도</div>
      <div class="container">
        <br />
        <br />
        <img src={Img1} alt="인사제도1" />
        <br />
        <img src={Img2} alt="인사제도2" />
      </div>
      <Bottom />
    </div>
  );
};

export default Aboutaone8;
