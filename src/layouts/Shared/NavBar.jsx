import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../componets/authprovider/AuthProvider';

const NavBar = () => {

  const { user } = useContext(AuthContext);
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Nav className="mx-auto">
              <li>
                <Link to="/category" className="text-decoration-none m-2">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none m-2">About</Link>
              </li>
              <li>
             
                <Link className="text-decoration-none m-2">Career</Link>
              </li>
            </Nav>
            <Nav className="me-0">
              <Nav.Link href="#features">
                <FaUserCircle style={{fontSize:'2em'}} />
              </Nav.Link>
              <Button variant="secondary">Login</Button>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
};

export default NavBar;