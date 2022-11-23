import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../css/Menu.css';

function Menu() {
  let sides = useSelector((state) => state.menu).sides
  let entrees = useSelector((state) => state.menu).entrees
  
  let sidesList = sides.map((item, idx) => {
    return (
      <Card className='menu-container' key={idx}>
        <Card.Body className='menu-body'>
        <Card.Img className='menu-img' variant="top" src={item.picture}/>
          <span className='menu-span'>
          <Card.Title className='menu-name'>{item.name}</Card.Title>
          <Card.Text className='menu-description'>
            {item.description}
          </Card.Text>
          </span>
        </Card.Body>
      </Card>
    )
  })

  let entreesList = entrees.map((item, idx) => {
    return (
      <Card className='entreesList' key={idx}>
        <Card.Body className='entreesList-body'>
        <Card.Img className='entreeList-img' variant="top" src={item.picture}/>
          <span className='entreesList-span'>
          <Card.Title className='entreesList-name'>{item.name}</Card.Title>
          <Card.Text className='entreesList-description'>
            {item.description}
          </Card.Text>
          </span>
        </Card.Body>
      </Card>
    )
  })
  return (
    <div className='menu-div'>
    <h1 className='menu-title'>Menu</h1>
    <p className='menu-p'>Choose from our Made fresh daily entree</p>
    <h2 className='menu-h2'>Sides</h2>
    {sidesList}
    <h2 className='menu-h3'>Entrees</h2>
    {entreesList}
    </div>
  )
}

export default Menu