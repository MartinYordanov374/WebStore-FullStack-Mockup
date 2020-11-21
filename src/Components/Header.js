import React from 'react'
import {Navbar, Nav, NavbarBrand, NavItem, NavLink} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css'
import {FaHeart, FaShoppingCart} from 'react-icons/fa'
export default function Header() {
    return (
        <div>
            <Navbar variant='light'>
                <NavbarBrand href='/Home'>Home</NavbarBrand>

                <NavbarBrand className='navbarBrand'>Aurora</NavbarBrand>
                <Nav className='ml-auto'>
                    <NavItem>
                        <NavLink>
                            <FaHeart className='wishlistIcon'size={20}></FaHeart>
                        </NavLink>
                        <NavLink>
                            <FaShoppingCart className='shoppingCartIcon'size={20}></FaShoppingCart>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}
