import React from 'react';

import Img1_1 from '../images/손영희.jpg';
import Img1_2 from '../images/한길림3.jpg';
import Img1_3 from '../images/오영록.jpg';
import Img1_4 from '../images/이재영.jpg';

import Img3 from '../images/bluemark.png';

import styles from './member.css';

const Members = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossorigin="anonymous"
      ></link>
      <link rel="stylesheet" type="text/css" href="css/app.css" />

      <div class="container">
        <h2>컨설팅총괄본부</h2>
      </div>

      <div class={styles}>
        <div class="card">
          <div class="card-header">
            <img src={Img1_1} alt="Profile Image" class="profile-img" />
          </div>
          <div class="card-body">
            <div class="container">
              <img src={Img3} alt="Profile Image" class="image" />
            </div>
            <p class="full-name">컨설팅총괄본부 팀장</p>

            <p class="username">손영희</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <img src={Img1_2} alt="Profile Image" class="profile-img" />
          </div>
          <div class="card-body">
            <p class="full-name">컨설팅사업부문 팀장</p>
            <p class="username">한길림</p>
            <p>
              <a href="#" class="social-icon facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon tumblr">
                <i class="fab fa-tumblr"></i>
              </a>
              <a href="#" class="social-icon youtube">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="#" class="social-icon linkedin">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="social-icon google-plus">
                <i class="fab fa-google-plus"></i>
              </a>
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <img src={Img1_4} alt="Profile Image" class="profile-img" />
          </div>
          <div class="card-body">
            <p class="full-name">컨설팅사업본부 팀장</p>
            <p class="username">이재영</p>
            <p>
              <a href="#" class="social-icon facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon tumblr">
                <i class="fab fa-tumblr"></i>
              </a>
              <a href="#" class="social-icon youtube">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="#" class="social-icon linkedin">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="social-icon google-plus">
                <i class="fab fa-google-plus"></i>
              </a>
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <img src={Img1_3} alt="Profile Image" class="profile-img" />
          </div>
          <div class="card-body">
            <p class="full-name">컨설팅사업부문 부문장</p>
            <p class="username">오영록</p>
            <p>
              <a href="#" class="social-icon facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon tumblr">
                <i class="fab fa-tumblr"></i>
              </a>
              <a href="#" class="social-icon youtube">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="#" class="social-icon linkedin">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="social-icon google-plus">
                <i class="fab fa-google-plus"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
