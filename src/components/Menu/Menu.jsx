import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Menu() {
  let menu = useSelector((state) => state)
  console.log(menu)
  return (
    <div style={{width: '80%', margin: 'auto'}}>
    <h1 style={{textAlign: 'center'}}>Menu</h1>
    <p style={{textAlign: 'center'}}>Choose from our Made fresh daily entree</p>

    <Card >
      <span>

      </span>
      <Card.Body style={{display: 'flex'}}>

      <Card.Img variant="top" src="https://www.modernhoney.com/wp-content/uploads/2018/01/Chinese-Orange-Chicken-2.jpg" style={{ width: '18rem', paddingRight: '1rem' }}/>

        <span>
        <Card.Title>Orange Chicken</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text style={{color: 'red'}}>$10.00</Card.Text>
        <Button variant="primary">Add to Cart</Button>
        </span>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Menu