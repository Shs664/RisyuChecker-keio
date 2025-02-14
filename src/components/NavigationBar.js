import { Navbar, Nav, Offcanvas, Container, Button } from 'react-bootstrap';
import React, {useState} from "react";
import { Link } from 'react-router-dom';




function NavigationBar(props) {
    
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
  }

  const handleToggle = () => setShow(!show)


  return (
    <Navbar expand="lg" bg="white" variant="light" className="aiueo">
      <Container fluid>
        
        
        <Button 
        variant="outline-secondary"
        className="d-lg-none"
        onClick={handleToggle}
        >
            <span class="navbar-toggler-icon"></span>
        </Button>

        
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="fw-bold fs-6 ms-auto me-3" style={{ gap: '25px' }}>
              <Nav.Link as={Link} to="/">
                Home
                
              </Nav.Link>
              <Nav.Link as={Link} to="about">About</Nav.Link>
              <Nav.Link as={Link} to="privacy">Privacy</Nav.Link>
              <Nav.Link as={Link} to="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* オフキャンバス */}
      <Offcanvas className="offcanvas-custom-width" show={show} onHide={handleToggle} placement="start">
        <Offcanvas.Header className="offcanvas-header" closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
            <Nav.Link href="#home">使い方</Nav.Link>
            <Nav.Link href="#about">プライバシーについて</Nav.Link>
            <Nav.Link href="#contact">お問い合わせ</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

     

     </Container>
    </Navbar>
  );
}

export default NavigationBar;
