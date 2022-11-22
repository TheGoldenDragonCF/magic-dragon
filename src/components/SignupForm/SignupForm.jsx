import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import './form.scss';

function SignupForm(props) {
  let [formData, setFormInput] = useState();

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
          <Form.Label>Email</Form.Label>
          <Form.Control 
            name='email'
            type='email'
            onChange={handleInputChange}
            placeholder='Email@mail.com'
            />
          <Form.Text>
            Please enter your mail address
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            name='firstName'
            type='text'
            onChange={handleInputChange}
            placeholder='Joe'
            />
          <Form.Text>
            Please enter your first Name
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            name='LastName'
            type='text'
            onChange={handleInputChange}
            placeholder='Smoe'
            />
          <Form.Text>
            Please enter your Last Name
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            name='password'
            type='password'
            onChange={handleInputChange}
            placeholder='Password'
            />
          <Form.Text>
            Please enter password
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control 
            name='confirmPassword'
            type='password'
            onChange={handleInputChange}
            placeholder='Password'
            />
          <Form.Text>
            Please re-enter password
          </Form.Text>
        </Form.Group>
          <Button type='submit'>Sign up</Button>
      </Form>
    </>
  );
}

export default SignupForm;