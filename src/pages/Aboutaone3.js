import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import GroupCard from '../Card/GroupCard';
import Img1 from '../images/구성원소개.png';
import Img2 from '../images/구성원소개2.png';
import Img3 from '../images/구성원소개3.png';
import Img4 from '../images/구성원소개4.png';
import Img5 from '../images/구성원소개5.png';
import Img6 from '../images/구성원소개6.png';
import Img7 from '../images/구성원소개7.png';
import Img8 from '../images/구성원소개8.png';
import Img9 from '../images/구성원소개9.png';
import Img10 from '../images/이성욱부대표.png';
import Img11 from '../images/team_005.jpg';
import Img12 from '../images/손영희.jpg';

import styles from './Aboutaone.module.css';

const Aboutaone3 = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://www.w3schools.com/w3css/4/w3.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      <Top />
      <div className={styles.down}> 구성원 소개 </div>
      <br />
      <br />
      <br />
      <br />
      <div class="container">
        <h2>임원진 소개</h2>
        <img src={Img1} alt="정운기회장님" />
        <br />
        <br />
        <img src={Img2} alt="황재호부대표님" />
        <br />
        <br />
        <img src={Img3} alt="박찬욱부대표님" />
        <br />
        <br />
        <img src={Img10} alt="박찬욱부대표님" />
        <br />
        <br />
        <img src={Img4} alt="정철부대표님" />
        <br />
        <br />
        <img src={Img5} alt="컨설팅" />
        <img src={Img6} alt="수도권" />
        <img src={Img7} alt="인천권" />
        <img src={Img8} alt="남부1권역" />
        <img src={Img9} alt="남부2권역" />
      </div>
      <div class="container">
        <div className={styles.card}>
          <GroupCard />
        </div>

        <div class="row">
          <div class="col-12">
            <hr />
          </div>
          <div class="col-5">
            <img src={Img11} alt="정운기회장님" />
          </div>
          <div class="col-3">
            <div className={styles.map}>정운기 회장님</div>
            <div className={styles.card}>
              *e-Mail woonki121@aounecustoms.com <br />
              <br />
              <h2>주요 경력</h2>
              <br />제 17회 행정고시 합격, 목포세관장, 제주 세관장
              <br />
              관세청 비서관, 총괄징수과장, 심리과장 <br />주 홍콩 총영사관 영사
              <br /> 관세청 관세중앙분석소장(부이사관)
              <br />
              주미 한국대사관 관세참사관(이사관) <br />
              김포세관장(이사관)
              <br /> 한국관세무역개발원 이사장 <br />
              관우회 이사장(3년 임기만료) <br />
              한국관세학회 고문(현재),한국관세학회 부회장
              <br /> 관세청 관세행정발전 자문위원, 재경부 FIU 자문위원
              <br /> 관세청 초일류세관추진위원회 위원 <br />
              관세법인 에이원 대표(현재)
              <br /> 케이티넷 고객만족위원회 위원장 <br />
              한국관세사회 회장(2년 임기만료)
              <br /> 한국무역관련지식재산권협회 자문위원(현재)
              <br /> 법원 전문심사관, 세정신문 논설위원(현재)
              <br />
              한국AEO진흥협회부회장(현재)
              <br /> 관세발전 실무위원회 자문위원(현재)
              <br />
              관세행정발전심의위원회 회원(현재)
              <br /> 유네스코 한국위원회 홍보개발위원(현재)
            </div>
          </div>
          <div class="col-3">
            <div className={styles.card}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2>학력</h2>
              <br /> 2009.08 서울대학교 자연과학대학 과학기술혁신최고전략과정
              수료
              <br /> 2001.08 서울대학교 행정대학원 국가정책과정 수료
              <br /> 1963.12 경희대학교 법과대학 졸업
              <br /> 1959.02 전주고등학교 졸업
            </div>
          </div>
        </div>
      </div>
      <br /> <br /> <br /> <br />
      <Bottom />
    </>
  );
};

export default Aboutaone3;
