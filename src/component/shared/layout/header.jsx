// import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoIosHome } from "react-icons/io";
import { IoEarth } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaBell } from "react-icons/fa6";




export default function Header() {
  return <>
  <Navbar expand="lg" className="mb-4 position-sticky top-0 z-3"bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#"><IoIosHome  className='me-2 fs-3'/>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#c"><IoEarth className='me-3 fs-3 '/>
            </Nav.Link>
            <Nav.Link href="#s"><IoPerson className='me-3 fs-3 ' />
            </Nav.Link>
            <Nav.Link href="#v"><MdEmail className='me-3 fs-3 '/>
            </Nav.Link>
            <NavDropdown title={<FaBell className='me-3 fs-3 '/>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">One new frined request</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Marah likes your post
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ahmed posted on your wall</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>;
}
