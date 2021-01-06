import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import slide1 from '../images/aone11.png';
import slide2 from '../images/aone22.png';
import slide3 from '../images/aone33.png';


const Slideshow = () => {
    return (


<Carousel>


  <Carousel.Item interval={1000}>
    <img
    className="d-block w-100"
    src ={slide1} alt='aone2?800x400?text=Second slide&bg=282c34'/>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>



  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src ={slide2} alt='aone1?800x400?text=Second slide&bg=282c34'/>

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>



  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src ={slide3} alt='aone1?800x400?text=Second slide&bg=282c34'/>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    )}

  export default Slideshow;