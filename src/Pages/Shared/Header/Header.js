import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png'

const Header = () => {
    return (
        <div className='sticky-top'>
            <>
                <Navbar collapseOnSelect expand="lg" style={{ "backgroundColor": '#e3f2fd' }}>
                    <Container>
                        <Navbar.Brand as={Link} to="/" className='text-primary fw-bold'>
                            <img height={30} src={logo} alt="" />
                            Laptop Inventory
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link className='text-primary fw-bold' as={Link} to="/">Home</Nav.Link>
                                <Nav.Link className='text-primary fw-bold' as={Link} to="manage">Manage Inventory</Nav.Link>
                                <Nav.Link className='text-primary fw-bold' as={Link} to="add">Add Items</Nav.Link>
                                <Nav.Link className='text-primary fw-bold' as={Link} to="myItems">My Items</Nav.Link>
                                <Nav.Link className='text-primary fw-bold' as={Link} to="login"> Login </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div >
    );
};

export default Header;