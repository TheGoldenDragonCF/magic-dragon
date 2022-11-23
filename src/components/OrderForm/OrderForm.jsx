import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
// import './form.scss';

function OrderForm(props) {
  let combo = useSelector((state) => state.combo)
  let sides = useSelector(state => state.menu.sides)
  let entrees = useSelector(state => state.menu.entrees)
  let [formData, setFormInput] = useState({
    combo: combo[0]
  });

  
  let comboOptions = combo.map((el, idx) => {
    return (
      <option value={el.name} key={idx}>{el.name}</option>
    )
  })

  let sidesOptions = sides.map((el, idx) => {
    return (
      <option value={el.name} key={idx}>{el.name}</option>
    )
  })

  let entreesOptions = entrees.map((el, idx) => {
    return (
      <option value={el.name} key={idx}>{el.name}</option>
    )
  })

  let handleInputChange = (e) => {
    setFormInput({...formData,[e.target.name]: e.target.value});
    
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    // props.handleApiCall(formData);
  };


  return (
    <>
      <Form onSubmit={handleSubmit} style={{width: '50%', margin: 'auto'}}>
        <Form.Group>
          <Form.Label>Combo</Form.Label>
      <Form.Select name="combo" onChange={handleInputChange}>
        {comboOptions}
        </Form.Select>
          <Form.Text>
            Please select a Combo
          </Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Side</Form.Label>
        <Form.Select name="side" onChange={handleInputChange}>
          {sidesOptions}
          </Form.Select>
            <Form.Text>
              Please select a side
            </Form.Text>
          </Form.Group>
          <Form.Group>
              <Form.Label>Entree</Form.Label>
          <Form.Select name="Entree" onChange={handleInputChange}>
            {entreesOptions}
            </Form.Select>
              <Form.Text>
                Please select a Entree
              </Form.Text>
            </Form.Group>
          <Button type='submit'>Add to Cart</Button>
      </Form>
    </>
  );
}

export default OrderForm;