import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Magic Dragon</Navbar.Brand>
        <Navbar/>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            <Nav.Link href="#action1">Combos</Nav.Link>
            <Nav.Link href="#action2">Menu</Nav.Link>
          </Nav>
        <Nav>
            <Nav.Link href="#action1">Login</Nav.Link>
            <Nav.Link href="#action1">Cart 🛒</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;