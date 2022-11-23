import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
// import './form.scss';

function OrderForm(props) {
  let combo = useSelector((state) => state.combo)
  let sides = useSelector(state => state.menu.sides)
  const dispatch = useDispatch()
  
  let entrees = useSelector(state => state.menu.entrees)
  let [formData, setFormInput] = useState({
    combo: combo[0].name,
    side1: 'White Rice',
    total: combo[0].price,
    entree1: 'Beef and Broccoli'
  });

  // console.log(formData)
  // console.log(combo)
  useEffect(() => {
    let baseTotal = combo.filter((el) => {
      if(el.name === formData.combo){ 
        return true
      }
    })[0].price

    setFormInput({
      ...formData,
      total: baseTotal
    })

    if(formData.combo === '#1 Magic Bowl'){
      setFormInput({
        combo: '#1 Magic Bowl',
        side1: 'White Rice',
        entree1: 'Beef and Broccoli',
        total: baseTotal
      })
    } else if(formData.combo === '#2 Magic Platter'){
      setFormInput({
        combo: '#2 Magic Platter',
        side1: 'White Rice',
        entree2: 'Beef and Broccoli',
        entree1: 'Beef and Broccoli',
        total: baseTotal
      })
    } else if(formData.combo === '#3 Dragon Combo'){
        setFormInput({
          combo: '#3 Dragon Combo',
          side1: 'Fried Rice',
          side2: 'Chow Mein',
          entree1: 'Beef and Broccoli',
          entree2: 'Beef and Broccoli',
          total: baseTotal
        })
      } else if(formData.combo === '#4 Family Value Pack'){
          setFormInput({
            combo: '#4 Family Value Pack',
            side1: 'Fried Rice',
            side2: 'Chow Mein',
            side3: 'Egg Rolls',
            side4: 'Pot Stickers',
            entree1: 'Beef and Broccoli',
            entree2: 'Beef and Broccoli',
            entree3: 'Beef and Broccoli',
            entree4: 'Beef and Broccoli',
            total: baseTotal
          })
        }


  },[formData.combo])

  useEffect(() => {
    let baseTotal = combo.filter((el) => {
      if(el.name === formData.combo){ 
        return true
      }
    })[0].price

    if( formData.side1 === 'Fried Rice'){
      setFormInput({
        ...formData,
        total: baseTotal + .5 
      })
    } else if( formData.side1 === 'Chow Mein'){
      setFormInput({
        ...formData,
        total: baseTotal + .75 
      })
  } else if( formData.side1 === 'White Rice'){
      setFormInput({
        ...formData,
        total: baseTotal 
      })
    } 


    // setFormInput({
      // ...formData,
      // total: baseTotal
    // })

  },[formData.side1])
  
  let comboOptions = combo.map((el, idx) => {
    return (
      <option value={el.name} key={idx}>{el.name}</option>
    )
  })

  let sidesOptions = sides.map((el, idx) => {
    if(el.name === 'Fried Rice') {
      return (
        <option value={el.name} key={idx}>{el.name} + $0.50</option>
        )
      } else if(el.name === 'Chow Mein'){
        return (
        <option value={el.name} key={idx}>{el.name} + $0.75</option>
        )
      } else {
        return (
        <option value={el.name} key={idx}>{el.name}</option>
        )
      }
  })

  let entreesOptions = entrees.map((el, idx) => {
    return (
      <option value={el.name} key={idx}>{el.name}</option>
    )
  })

  let handleInputChange = (e) => {
    setFormInput({...formData,[e.target.name]: e.target.value});
  };
  // console.log(formData)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData)

    dispatch({
      type: 'ADD_TO_CART',
      payload: formData
  })
    // props.handleApiCall(formData);
  };

  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add an order to cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
        {formData.combo === '#1 Magic Bowl'  && 
        <>
        <Form.Group>
            <Form.Label>Side</Form.Label>
        <Form.Select name="side1" onChange={handleInputChange}>
          {sidesOptions}
          </Form.Select>
            <Form.Text>
              Please select a side
            </Form.Text>
          </Form.Group>
          <Form.Group>
              <Form.Label>Entree</Form.Label>
          <Form.Select name="entree1" onChange={handleInputChange}>
          {/* <option value=''>Please Select Entree</option> */}
            {entreesOptions}
            </Form.Select>
              <Form.Text>
                Please select a Entree
              </Form.Text>
            </Form.Group>
        </>
          }
            {formData.combo === '#2 Magic Platter'  && 
            <>
            <Form.Group>
                <Form.Label>Side</Form.Label>
            <Form.Select name="side1" onChange={handleInputChange}>
              {sidesOptions}
              </Form.Select>
                <Form.Text>
                  Please select a side
                </Form.Text>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Entree</Form.Label>
              <Form.Select name="entree1" onChange={handleInputChange}>
              {/* <option value=''>Please Select Entree</option> */}
                {entreesOptions}
                </Form.Select>
                  <Form.Text>
                    Please select a Entree
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Entree</Form.Label>
                <Form.Select name="entree2" onChange={handleInputChange}>
                {/* <option value=''>Please Select Entree</option> */}
                  {entreesOptions}
                  </Form.Select>
                    <Form.Text>
                      Please select a Entree
                    </Form.Text>
                  </Form.Group>
            </>
            }
            {formData.combo === '#3 Dragon Combo'  && 
            <>
            <Form.Group>
                <Form.Label>Side</Form.Label>
            <Form.Select name="side1" onChange={handleInputChange} disabled>
                <option value='Fried Rice'>Fried Rice</option>
              {/* {sidesOptions} */}
              </Form.Select>
                <Form.Text>Comes with this side</Form.Text>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Side</Form.Label>
              <Form.Select name="side2" onChange={handleInputChange} disabled>
              <option value='Chow Mein'>Chow Mein</option>
                {/* {sidesOptions} */}
                </Form.Select>
                <Form.Text>Comes with this side</Form.Text>
                </Form.Group>
              <Form.Group>
                  <Form.Label>Entree</Form.Label>
              <Form.Select name="entree1" onChange={handleInputChange}>
              {/* <option value=''>Please Select Entree</option> */}
                {entreesOptions}
                </Form.Select>
                  <Form.Text>
                    Please select a Entree
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Entree</Form.Label>
                <Form.Select name="entree2" onChange={handleInputChange}>
                {/* <option value=''>Please Select Entree</option> */}
                  {entreesOptions}
                  </Form.Select>
                    <Form.Text>
                      Please select a Entree
                    </Form.Text>
                  </Form.Group>
            </>
            }
            {formData.combo === '#4 Family Value Pack'  && 
            <>
            <Form.Group>
                <Form.Label>Side</Form.Label>
            <Form.Select name="side1" onChange={handleInputChange} disabled>
                <option value='Fried Rice'>Fried Rice</option>
              {/* {sidesOptions} */}
              </Form.Select>
                <Form.Text>Comes with 1 1/2 lbs. of this side</Form.Text>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Side</Form.Label>
              <Form.Select name="side2" onChange={handleInputChange} disabled>
              <option value='Chow Mein'>Chow Mein</option>
                {/* {sidesOptions} */}
                </Form.Select>
                <Form.Text>Comes with 1 1/2 lbs. of this side</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Side</Form.Label>
                <Form.Select name="side3" onChange={handleInputChange} disabled>
                <option value='Egg Rolls'>Egg Rolls</option>
                  {/* {sidesOptions} */}
                  </Form.Select>
                  <Form.Text>Comes with 4 Egg Rolls</Form.Text>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Side</Form.Label>
                  <Form.Select name="side4" onChange={handleInputChange} disabled>
                  <option value='Pot Stickers'>Pot Stickers</option>
                    {/* {sidesOptions} */}
                    </Form.Select>
                    <Form.Text>Comes with 4 Pot Stickers</Form.Text>
                    </Form.Group>
              <Form.Group>
                  <Form.Label>Entree</Form.Label>
              <Form.Select name="entree1" onChange={handleInputChange}>
              {/* <option value=''>Please Select Entree</option> */}
                {entreesOptions}
                </Form.Select>
                  <Form.Text>
                    Please select a Entree
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Entree</Form.Label>
                <Form.Select name="entree2" onChange={handleInputChange}>
                {/* <option value=''>Please Select Entree</option> */}
                  {entreesOptions}
                  </Form.Select>
                    <Form.Text>
                      Please select a Entree
                    </Form.Text>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Entree</Form.Label>
                  <Form.Select name="entree3" onChange={handleInputChange}>
                  {/* <option value=''>Please Select Entree</option> */}
                    {entreesOptions}
                    </Form.Select>
                      <Form.Text>
                        Please select a Entree
                      </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Entree</Form.Label>
                    <Form.Select name="entree4" onChange={handleInputChange}>
                    {/* <option value=''>Please Select Entree</option> */}
                      {entreesOptions}
                      </Form.Select>
                        <Form.Text>
                          Please select a Entree
                        </Form.Text>
                      </Form.Group>
            </>
            }

            <Form.Group>
            <Form.Label style={{color: 'red'}}>
              Total: {formData.total}
            </Form.Label>
            </Form.Group>
          <Button type='submit' onClick={handleSubmit}>Add to Cart</Button>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default OrderForm;