import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import Img1 from '../images/글로벌네트워크.jpg';
import Img2 from '../images/글로벌네트워크2.jpg';
import Img3 from '../images/글로벌네트워크3.jpg';

import styles from './Aboutaone.module.css';


const Education5 = () => {
    return (
    <div>
     
            <Top />
            <div className={styles.down}>글로벌 네트워크 </div>
            <div class = "container">
                <br />
                <br />          
<img src ={Img1} alt='' />     <br />

<img src ={Img2} alt='' />     <br />
<br />   
<img src ={Img3} alt='' />   

<br /><br />

            </div>
            <Bottom />
        </div>
    );
};

export default Education5;