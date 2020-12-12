import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavbarBrand, NavItem, NavLink} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css'
import {FaHeart, FaShoppingCart, FaUser} from 'react-icons/fa'
class Header extends Component {
    render() { 
        const {productsInWishList} = this.props;
        const {productsInCart} = this.props;
    return (
        <div>
            <Navbar variant='light'>
                <NavbarBrand href='/Home' className='homeButton'><strong>Neon</strong></NavbarBrand>
                <NavItem>
                    <NavLink className='nav-link' href='/Hoodies'>
                        Худита
                    </NavLink>
                    <NavLink href='/Masks'>
                        Маски
                    </NavLink>
                </NavItem>
                <Nav className='ml-auto'>
                    <NavItem>
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