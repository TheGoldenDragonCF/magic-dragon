import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

function Cart() {
  let cart = useSelector(state => state.cart)

  let cartList = cart.items.map((el, idx) => {
    return (
      <ListGroup.Item style={{display: 'flex', justifyContent: 'space-between'}} key={idx}>
        <span>
          <h5>{el.combo}</h5>
          <p> side: {el.side} </p>
          <p> entree: {el.entree}</p>
        </span>
        <span style={{padding: '1rem 0'}}>
          $8.00
          <Button variant='danger' size='sm' style={{margin: '1rem'}}> X </Button>
        </span>
      </ListGroup.Item>

    )
  })
  console.log(cart)
  
  return (
    <div style={{width: '50%', margin: 'auto'}}>
    <h3 style={{textAlign: 'center'}}>Cart</h3>
    <ListGroup variant="flush">
      {cartList}
      <ListGroup.Item style={{textAlign: 'center'}}>Total: $8.00</ListGroup.Item>
    </ListGroup>
    <div style={{display: 'flex', justifyContent: 'center'}}>

    <Button >Place Order</Button>
    </div>
    </div>
  );
}

export default Cart;