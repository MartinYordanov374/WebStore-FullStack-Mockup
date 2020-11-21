import React from 'react'
import {Navbar, Nav, NavbarBrand, NavItem, NavLink} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css'
import {FaHeart, FaShoppingCart} from 'react-icons/fa'
export default function Header() {
    return (
        <div>
            <Navbar variant='light'>
                <NavbarBrand href='#'>Home</NavbarBrand>

                <NavbarBrand className='navbarBrand'>Aurora</NavbarBrand>
                <Nav className='ml-auto'>
                    <NavItem>
                        <NavLink>
                            <FaHeart size={20}></FaHeart>
                        </NavLink>
                        <NavLink>
                            <FaShoppingCart size={20}></FaShoppingCart>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}
