import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{ "backgroundColor": '#e3f2fd' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-primary fw-bold' href="#features">Features</Nav.Link>
                            <Nav.Link className='text-primary fw-bold' href="#pricing">Pricing</Nav.Link>

                        </Nav>
                        <Nav >
                            <Nav.Link className='text-primary fw-bold' href="#deets">More deets</Nav.Link>
                            <Nav.Link className='text-primary fw-bold' eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;