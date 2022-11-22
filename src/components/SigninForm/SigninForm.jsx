import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import './form.scss';

function SigninForm(props) {
  let [formInput, setFormInput] = useState();
  let [formMethod, setFormMethod] = useState('get');

  let handleUrlInputChange = (e) => {
    setFormInput(e.target.value);
  };

  let handleMethodClick = (e) => {
    setFormMethod(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: formMethod,
      url: formInput,
    };
    console.log(`formInput: ${formInput}`)
    // props.handleApiCall(formData);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} style={{width: '50%', margin: 'auto'}}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control 
            name='url'
            type='email'
            onChange={handleUrlInputChange}
            placeholder='Email@mail.com'
            />
          <Form.Text>
            Please enter your mail address
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            name='url'
            type='password'
            onChange={handleUrlInputChange}
            placeholder='Password'
            />
          <Form.Text>
            Please enter password
          </Form.Text>
        </Form.Group>
          <Button type='submit'>Sign in</Button>
      </Form>
    </>
  );
}

export default SigninForm;