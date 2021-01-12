import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/복리후생.png';
import Img2 from '../images/복리후생2.png';
import styles from './Aboutaone.module.css';

const Aboutaone9 = () => {
  return (
    <div>
      <Top />
      <div className={styles.down}>복리후생</div>
      <div class="container">
        <br />
        <br />
        <h2>복리후생</h2>
        <br />

        <img src={Img1} alt="복리후생" />
        <img src={Img2} alt="복리후생2" />
      </div>
      <Bottom />
    </div>
  );
};

export default Aboutaone9;
