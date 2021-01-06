import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/CI.png';
import styles from './Aboutaone.module.css';


const Aboutaone8 = () => {
    return (
    <div>
       
            <Top />
            <div className={styles.down}>인사제도</div>
            <div class = "container">
           <h2> 인사제도</h2>
           직급체계 및 승진제도
<br />
<br />
● 직급체계
직급체계는 관세사 및 일반직으로 구분되며 각 직급별 승진년한은 정해져 있지만
업무성과가 우수하고 유능한 직원에게는 년한과 무관한 발탁승진의 기회가 주어집니다.
<br />
<br />
● 승진제도
각 직급에 요구되는 업무수행 능력 및 요구역량에
적합한 경우 승진이 시행되며 연간 2회 운영됩니다.
<br />
<br />
보상체계
보상체계는 성과와 능력 기반의 연봉제를 운영하고 있습니다.
성과에 따른 Incentive 제를 시행하며 매년 동종업계 임금수준 조사를 통해 경쟁력 있는 임금수준을 유지하고
있습니다.


            </div>
            <Bottom />
        </div>
    );
};

export default Aboutaone8;