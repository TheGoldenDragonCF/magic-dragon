import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample(props) {
  return (
    <Navbar expand="lg" style={{background: 'green'}}>
      <Container fluid>
        <Navbar.Brand href="#" style={{color: 'darkred', fontSize: 'xx-large', fontWeight: '700'}}>Magic Dragon</Navbar.Brand>
        <Navbar/>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            <Nav.Link href="#action1" style={{color: 'yellow'}}>Combos</Nav.Link>
            <Nav.Link href="#action2" style={{color: 'yellow'}}>Menu</Nav.Link>
          </Nav>
        <Nav>
            <Nav.Link href="#action1" style={{color: 'yellow'}} onClick={props.showSignin}>Login</Nav.Link>
            <Nav.Link style={{color: 'yellow'} } onClick={props.showCart}>Cart 🛒</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;