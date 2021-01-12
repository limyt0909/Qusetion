import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/인재상.png';
import styles from './Aboutaone.module.css';

const Aboutaone7 = () => {
  return (
    <div>
      <Top />
      <div className={styles.down}>인재상</div>

      <div class="container">
        {' '}
        <br />
        <h2> 인재상</h2>
        <img src={Img1} alt="인재상" />
      </div>
      <Bottom />
    </div>
  );
};

export default Aboutaone7;
