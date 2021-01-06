import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import React from 'react';
import styles from './Card.module.css';

import Card1 from '../images/사진.jpg';
import Card2 from '../images/사진2.jpg';
import Card3 from '../images/사진3.jpg';

const GroupCard = () => {
    return ( 

<>


<div className={styles.card}>

<CardDeck>
  <Card>
  <Card.Img  variant="top" src ={Card1} alt='사진/100px160'/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Img  variant="top" src ={Card2} alt='사진2/100px160'/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Img  variant="top" src ={Card3} alt='사진3/100px160'/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
</>



    )}

export default GroupCard;