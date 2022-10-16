import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../healthfit images/fit-logo.png'
// import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

function NavBar() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-4 navbar" >
          <Container fluid>
            <Navbar.Brand data-aos-anchor-easing='ease-in-out' data-aos="fade-up" data-aos-duration='1500' className='brand-name' href="#" ><span className = 'logo'><img src={logo} alt="logo" /></span>HealthFit</Navbar.Brand>
            <Navbar.Toggle className='toggle' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className='canvas'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='nav-body'>

                <Nav data-aos-anchor-easing='ease-in-out' className="justify-content-center nav-menu pe-5">

                  <LinkContainer to="/">
                    <Nav.Link className='nav-link' data-aos="fade-up" data-aos-duration='1500'>
                      Home
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/about">
                    <Nav.Link className='nav-link' data-aos="fade-up" data-aos-duration='1600'>
                      About Us
                    </Nav.Link>
                  </LinkContainer>



                  <LinkContainer to="/services">
                    <Nav.Link className='nav-link' data-aos="fade-up" data-aos-duration='1700'>
                      Services
                    </Nav.Link>
                  </LinkContainer>


                  <LinkContainer to="/bookings">
                    <Nav.Link className='nav-link' data-aos="fade-up" data-aos-duration='1800'>
                      Bookings
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/blog">
                    <Nav.Link className='nav-link' data-aos="fade-up" data-aos-duration='1900'>
                     Blog
                    </Nav.Link >
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link className='nav-link' data-aos="fade-up" data-aos-duration='2000'>
                      Contact Us
                    </Nav.Link>
                  </LinkContainer>


                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;