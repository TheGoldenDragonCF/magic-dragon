import { useSelector, useDispatch } from 'react-redux';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../css/Combo.css';


function Combo() {
  let comboList = useSelector(state => state.combo)
  console.log(comboList)

  let combos = comboList.map((combo, idx) => {
  return (
    <Card className='container' key={idx}>
      <Card.Img variant="top" src={combo.picture} />
      <Card.Body>
        <Card.Title className='combo-name'>{combo.name}</Card.Title>
        <Card.Text className='combo-description1'>{combo.description1}</Card.Text>
        <Card.Text className='combo-price'>{combo.price}</Card.Text>
        <Card.Text className='combo-description2 blink'>{combo.description2}</Card.Text>
      </Card.Body>
    </Card>
  )
  })

  return (
    <div className='combo-container'>
      <h1 className='combo-title'>Combos</h1>
      <div className='div-container'> {combos} </div>
      <div className='h3'>Rice substitution:</div>
      <div className='h4'>Fried Rice-50¢ Chow Main-75¢ Brown Rice-75¢</div>
    </div>
  );
}

export default Combo;
