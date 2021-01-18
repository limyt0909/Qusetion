import React from 'react';

import Img1 from '../images/quick1.jpg';
import Img2 from '../images/quick2.jpg';
import Img3 from '../images/quick3.jpg';
import Img4 from '../images/quick4.jpg';

import Navbar from 'react-bootstrap/Navbar';

import styles from './Homes.module.css';
const Homes2 = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

      <div className={styles.back}>
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <Navbar.Brand href="/Resources2">
                <img
                  src={Img1}
                  class="rounded-circle"
                  alt="1"
                  width="100%"
                  height="auto !important"
                />
              </Navbar.Brand>

              <h3>관세무역 자료실</h3>
            </div>
            <div class="col-sm-3">
              {' '}
              <Navbar.Brand href="/Resources4">
                <img
                  src={Img2}
                  class="rounded-circle"
                  alt="2"
                  width="100%"
                  height="auto !important"
                />
              </Navbar.Brand>
              <br />
              <h3>유관기관 안내</h3>
            </div>

            <div class="col-sm-3">
              {' '}
              <Navbar.Brand href="/Resources2">
                <img
                  src={Img3}
                  class="rounded-circle"
                  alt="3"
                  width="100%"
                  height="auto !important"
                />
              </Navbar.Brand>
              <br />
              <h3>교육일정 관리</h3>
            </div>

            <div class="col-sm-3">
              {' '}
              <Navbar.Brand href="/Resources">
                <img
                  src={Img4}
                  class="rounded-circle"
                  alt="4"
                  width="100%"
                  height="auto !important"
                />
              </Navbar.Brand>
              <br />
              <h3>관세무역 뉴스</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homes2;
