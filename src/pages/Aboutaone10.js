import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import styles from './Aboutaone.module.css';


const Aboutaone10 = () => {
    return (
    <div>
       
            <Top />
            <div className={styles.down}>주요고객사</div>
            <div class = "container">
           <h2> 주요고객사</h2>

각 분야별 최고의 업체들과 거래하는 관세법인 에이원!
그들이 믿고 맡기는 회사가 바로 관세법인 에이원입니다.
믿고 따라오시면 더욱 스마트한 기업이 되실 수 있습니다. 최상의 서비스로 도와드리겠습니다.




            </div>
            <Bottom />
        </div>
    );
};

export default Aboutaone10;