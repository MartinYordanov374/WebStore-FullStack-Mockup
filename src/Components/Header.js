import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavbarBrand, NavItem, NavLink, FormControl, Button, InputGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css'
import {FaHeart, FaShoppingCart, FaRegUser, FaSearch, FaUserCheck} from 'react-icons/fa'
import $ from 'jquery'
class Header extends Component {
    render() { 
        const {productsInWishList} = this.props;
        const {productsInCart} = this.props;
        let isLoggedIn = document.cookie;
        
    return (
        <div className='navbarWrapper sticky-top'>
            <Navbar expand='lg' className='sticky-top' variant='light'>
                <NavbarBrand href='/Home'><span className='homeButton'><strong>Neon</strong></span></NavbarBrand>
                <Navbar.Toggle />
                <Navbar.Collapse>

                    <NavItem>
                        
                        <NavLink className='HoodiesLink' href='/Hoodies'>
                            Худита
                        </NavLink>
                        <NavLink className='MasksLink' href='/Masks'>
                            Маски
                        </NavLink>
                    </NavItem>
                    <InputGroup className='searchBar'>
                        <FormControl placeholder='Потърсете продукт...'/>
                        <InputGroup.Append>
                            <InputGroup.Text className='searchButton'>
                                <FaSearch/>
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    <Nav className='Icons'>
                        <NavItem>    
                            { isLoggedIn.length > 3 
                            ?                    
                            <NavLink href='/profilepage'>
                                <FaUserCheck className='loginLink' size={32}></FaUserCheck>
                            </NavLink>
                            :
                            <NavLink href='/Login'>
                                <FaRegUser className='loginLink' size={32}></FaRegUser>
                            </NavLink>
                            }
                            <NavLink href='/Wishlist'>
                                <FaHeart className='wishlistIcon'size={30}/><span className='wishListIndex'>{productsInWishList.length}</span>
                            </NavLink>
                            <NavLink href='/Cart'>
                                <FaShoppingCart  className='shoppingCartIcon'size={30}></FaShoppingCart><span className='cartIndex'>{productsInCart.length}</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

        </div>

    )
}
}
const mapStateToProps=(state={productsInWishList:[{}],productsInCart:[{}]})=>{
    return{
        productsInWishList: state.productsInWishList,
        productsInCart: state.productsInCart
    }
}
export default connect(mapStateToProps)(Header)