import React from 'react';

import styles from './Homes.module.css';

import Img1 from '../images/quick1.jpg';
import Img2 from '../images/quick2.jpg';
import Img4 from '../images/quick4.jpg';

const Homes3 = () => {
  return (
    <>
      <div
        class="w3-container w3-content w3-center w3-padding-64"
        max-width="800px"
        id="band"
      >
        <h2 class="w3-wide">Aone-customs</h2>
        <p class="w3-opacity">
          <i>Introduce</i>
        </p>
        <p class="w3-justify">
          In terms of business areas, we provide the widest range of services in
          Korea, including import and export customs clearance, quarantine, FTA
          (Free Trade Agreement), AEO (Authorized Economic Operator) consulting,
          and review and dispute. It is the best company in the industry, in
          name and reality, with the No. 1 contest winning record. A-One
          acquired AEO certification for the first time in the same industry,
          and has since acquired AA certification in a more advanced form.
        </p>

        <div className={styles.circle}>
          <div class="w3-row w3-padding-32">
            <div class="w3-third">
              <a href="/Resources2">
                <img
                  src={Img1}
                  class="w3-circle w3-margin-bottom"
                  alt="Random Name"
                  width="50%"
                />{' '}
              </a>
              <p>관세무역 자료실</p>
              <div className={styles.circle2}>
                <p>
                  국내외 광범위한 무역지식을
                  <br />
                  한자리에 모았습니다.
                </p>
              </div>
            </div>
            <div class="w3-third">
              <a href="/Resources4">
                <img
                  src={Img2}
                  class="w3-circle w3-margin-bottom"
                  alt="Random Name"
                  width="50%"
                />
              </a>
              <p>유관기관 안내</p>
              <div className={styles.circle2}>
                <p>
                  관세무역 유관 기관들을
                  <br />
                  한번에 확인하세요.
                </p>
              </div>
            </div>
            <div class="w3-third">
              <a href="/Resources">
                <img
                  src={Img4}
                  class="w3-circle w3-margin-bottom"
                  alt="Random Name"
                  width="50%"
                />
              </a>{' '}
              <p>관세무역 뉴스</p>
              <div className={styles.circle2}>
                <p>
                  관세무역의 최신뉴스
                  <br />
                  관세법인 에이원에서 확인하세요.
                </p>
              </div>
            </div>
          </div>{' '}
        </div>
      </div>
    </>
  );
};

export default Homes3;
