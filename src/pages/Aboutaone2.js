import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/조지도.png';
import styles from './Aboutaone.module.css';

const Aboutaone2 = () => {
  return (
    <div>
      <Top />
      <div className={styles.down}> 조 직 도 </div>
      <br />
      <div class="container">
        {' '}
        <br />
        <h2>조직도</h2>
        <img src={Img1} alt="조지도" />
      </div>
      <br /> <br />
      <Bottom />
    </div>
  );
};

export default Aboutaone2;
