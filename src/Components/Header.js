import React from 'react'
import {Navbar, Nav, NavbarBrand, NavItem, NavLink} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css'
export default function Header() {
    return (
        <div>
            <Navbar variant='light'>
                <NavbarBrand>TestBrand</NavbarBrand>
                <Nav className='ml-auto'>
                    <NavItem>
                        <NavLink>
                            Home
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}
