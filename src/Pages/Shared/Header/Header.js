import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
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
                                {
                                    user ?
                                        <Nav.Link className='text-primary fw-bold' as={Link} to="home" onClick={handleSignOut}> Sign Out </Nav.Link> :
                                        <Nav.Link className='text-primary fw-bold' as={Link} to="login"> Login </Nav.Link>

                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div >
    );
};

export default Header;