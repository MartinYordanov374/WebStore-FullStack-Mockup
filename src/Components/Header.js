import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavbarBrand, NavItem, NavLink, FormControl, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css'
import {FaHeart, FaShoppingCart, FaUserCircle, FaSearch} from 'react-icons/fa'
class Header extends Component {
    render() { 
        const {productsInWishList} = this.props;
        const {productsInCart} = this.props;
        let isLoggedIn = document.cookie
    return (
        <div className='navbarWrapper sticky-top'>
            <Navbar className='sticky-top' variant='light'>
                <NavbarBrand href='/Home'><span className='homeButton'><strong>Neon</strong></span></NavbarBrand>
                <NavItem>
                    
                    <NavLink className='HoodiesLink' href='/Hoodies'>
                        Худита
                    </NavLink>
                    <NavLink className='MasksLink' href='/Masks'>
                        Маски
                    </NavLink>
                </NavItem>
                <FormControl className='searchBar' placeholder='Потърсете продукт...'/>
                <FaSearch className='searchButton'/>
                <Nav className='Icons'>
                    <NavItem>    
                        { isLoggedIn.length > 3 
                        ?                    
                        <NavLink href='/profilepage'>
                            <FaUserCircle className='loginLink' size={32}></FaUserCircle>
                        </NavLink>
                        :
                        <NavLink href='/Login'>
                            <FaUserCircle className='loginLink' size={32}></FaUserCircle>
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