import React from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import Logo from '../../imagens/logo.png';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={Logo}
                    width="45"
                    height="39"
                    className="d-inline-block align-top"
                />{' '}
                Sousa Oliveira Engenharia
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#sobre">Sobre</Nav.Link>
                    <NavDropdown title="Contatos" id="contatos">
                        <NavDropdown.Item href="#contatos/3.1">Whatsapp</NavDropdown.Item>
                        <NavDropdown.Item href="#contatos/3.2">Instragram</NavDropdown.Item>
                        <NavDropdown.Item href="#contatos/3.3">Facebook</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#contatos/3.4">Fale conosco</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default NavBar;
