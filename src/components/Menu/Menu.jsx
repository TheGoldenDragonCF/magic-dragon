import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Menu() {
  let menu = useSelector((state) => state.menu).menuItems
  console.log(menu)
  
  let menuList = menu.map(item => {
    console.log(item.picture)
    return (
      <Card style={{border: 'none',borderBottom: 'solid lightgrey', borderRadius: '0'}}>
        <Card.Body style={{display: 'flex'}}>
        <Card.Img variant="top" src={item.picture} style={{ width: '18rem', paddingRight: '1rem' }}/>
          <span>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Card.Text style={{color: 'red'}}>{item.price}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
          </span>
        </Card.Body>
      </Card>
    )
  })
  return (
    <div style={{width: '60%', margin: 'auto'}}>
    <h1 style={{textAlign: 'center'}}>Menu</h1>
    <p style={{textAlign: 'center'}}>Choose from our Made fresh daily entree</p>
    {menuList}
    </div>
  )
}

export default Menu