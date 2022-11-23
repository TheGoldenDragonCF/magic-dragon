import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Menu() {
  let sides = useSelector((state) => state.menu).sides
  let entrees = useSelector((state) => state.menu).entrees
  
  let sidesList = sides.map((item, idx) => {
    return (
      <Card style={{border: 'none',borderBottom: 'solid lightgrey', borderRadius: '0'}} key={idx}>
        <Card.Body style={{display: 'flex'}}>
        <Card.Img variant="top" src={item.picture} style={{ width: '18rem', paddingRight: '1rem' }}/>
          <span style={{padding: '70px 0'}}>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          </span>
        </Card.Body>
      </Card>
    )
  })

  let entreesList = entrees.map((item, idx) => {
    return (
      <Card style={{border: 'none',borderBottom: 'solid lightgrey', borderRadius: '0'}} key={idx}>
        <Card.Body style={{display: 'flex'}}>
        <Card.Img variant="top" src={item.picture} style={{ width: '18rem', paddingRight: '1rem' }}/>
          <span style={{padding: '70px 0'}}>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          </span>
        </Card.Body>
      </Card>
    )
  })
  return (
    <div style={{width: '60%', margin: 'auto'}}>
    <h1 style={{textAlign: 'center', paddingTop: '3rem'}}>Menu</h1>
    <p style={{textAlign: 'center'}}>Choose from our Made fresh daily entree</p>
    <h2 style={{textAlign: 'center'}}>Sides</h2>
    {sidesList}
    <h2 style={{textAlign: 'center', paddingTop: '3rem'}}>Entrees</h2>
    {entreesList}
    </div>
  )
}

export default Menu