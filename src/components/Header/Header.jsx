import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../css/Header.css';




function NavScrollExample() {
  return (
    <Navbar className='header-navbar' expand="lg">
      <Container fluid>
        <Navbar.Brand  className='company-logo' href="#">Magic Dragon</Navbar.Brand>
        <Navbar/>
          <Nav
            className="me-auto my-2 my-lg-0 hero-nav">
            <Nav.Link className='hero-combo' href="#action1">Combos</Nav.Link>
            <Nav.Link className='hero-menu' href="#action2">Menu</Nav.Link>
          </Nav>
        <Nav>
            <Nav.Link className='hero-login' href="#action1">Login</Nav.Link>
            <Nav.Link className='hero-cart' href="#action1"><i className='fa-sharp fa-solid fa-cart-shopping'></i></Nav.Link>
            
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;