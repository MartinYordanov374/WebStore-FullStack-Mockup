import React, { Component } from 'react'
import {Navbar, Nav, NavItem, NavLink} from 'react-bootstrap'
import './css/bottomNavbar.css'
export default class SecondNavbar extends Component {
    render() {
        return (
            <div className='bottomNavbarWrapper'>
                <Navbar className='bottomNavbar'>
                <Nav>
                    <NavItem>
                        <NavLink href='/New' className='newProductsLink'> <strong>NEW </strong></NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink href='/Sale' className='saleLink'> <strong>SALE</strong> </NavLink>
                    </NavItem>
                </Nav>
                </Navbar>
            </div>
        )
    }
}
