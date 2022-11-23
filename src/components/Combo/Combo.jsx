import { useSelector, useDispatch } from 'react-redux';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Combo() {
  let comboList = useSelector(state => state.combo)

  let combos = comboList.map((combo, idx) => {
  return (
    <Card style={{ width: '18rem' }} key={idx}>
      <Card.Img variant="top" src={combo.picture} />
      <Card.Body>
        <Card.Title>{combo.name}</Card.Title>
        <Card.Text>{combo.description1}</Card.Text>
        <Card.Text style={{color: 'red'}}>${combo.price}</Card.Text>
        <Card.Text>{combo.description2}</Card.Text>
      </Card.Body>
    </Card>
  )
  })

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Combos</h1>
      <div className='combo-container' style={{display: 'flex', width: '80%', margin: 'auto', justifyContent: 'space-around'}}>
      {combos}

      </div>
      <h3>Rice substitution:</h3>
      <h4>Fried Rice-50¢ Chow Main-75¢ Brown Rice-75¢</h4>
    </div>
  );
}

export default Combo;
