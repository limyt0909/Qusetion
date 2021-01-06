import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import Img1 from '../images/지도.jpg';
import Img2 from '../images/지도2.jpg';
import Img3 from '../images/지도3.jpg';
import Img4 from '../images/지도4.jpg';
import Img5 from '../images/지도5.jpg';
import Img6 from '../images/지도6.jpg';

import styles from './Aboutaone.module.css';


const Aboutaone11 = () => {
    return (
    <div>
       
            <Top />
            <div className={styles.down}>오시는길</div>
            <div class = "container">
           <h2> 오시는길</h2>

에이원은 국내 10개의 주요 지사를 통해 고객사에 보다 신속하고 정확한 업무를 처리해 드리고 있습니다.
각 지사에 문의하시면 여러분의 무역 통관 상의 질문에 친절히 안내해 드립니다.


<iframe class="wrap-box-element" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
 src="https://maps.google.com/maps?q=37.515897,127.034914&amp;ll=37.515897,127.034914&amp;z=16&amp;output=embed"></iframe>

            <img src ={Img1} alt='' /> 
            <img src ={Img2} alt='' /> 
            <img src ={Img3} alt='' /> 
            <img src ={Img4} alt='' /> 
            <img src ={Img5} alt='' /> 
            <img src ={Img6} alt='' /> 
           <>
            컨설팅 -> 본사지하1층
            인천공항 -> 인천총괄본부
           인천지사 ->OUT
           모든 지점
            부산총괄본부- >  부산광역시 중구 충장대로 9번길 46(중앙동 4가) 지상 10층 (표시층11층))
            </>
            </div>
            <Bottom />
        </div>
    );
};

export default Aboutaone11;