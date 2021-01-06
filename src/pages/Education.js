import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';


import Img1 from '../images/e-learning.jpg';
import Img2 from '../images/e-1.jpg';
import Img3 from '../images/e-2.jpg';
import Img4 from '../images/e-3.jpg';


import styles from './Aboutaone.module.css';


const Education = () => {
    return (
    <div>
     
            <Top />
            <div className={styles.down}>E-Learning</div>
            <div class = "container">
                <br />
            <img src ={Img1} alt='E-learning' /><br /> <br />
            
<br />관세법인 에이원의 E-learning 서비스는 “Trade Insight”라는 명칭으로 관세법인 에이원의 각 분야의 전문 관세사들이 모여 깊이 있고 다양한 사례를 분석하여 실무에 활용도가 높은 교육을 진행하는 On-Line 교육입니다.
AEO과정, 통관과정, FTA과정(초급, 심화)응 세분화하여 각 분야별 전문 관세사들이 직접 실무의 경험을 사례로 제시하여 보다 현실적이며 정확한 정보를 들으실 수 있습니다.
업계의 최초로 시행된 On-Line강의! 언제 어디서든 간편하고 쉽게 수강하실 수 있습니다.
<img src ={Img2} alt='e-1' />
<img src ={Img3} alt='e-2' />
<img src ={Img4} alt='e-3' />
<br /><br />

            </div>
            <Bottom />
        </div>
    );
};

export default Education;