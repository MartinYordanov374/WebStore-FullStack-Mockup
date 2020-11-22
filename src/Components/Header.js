import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavbarBrand, NavItem, NavLink} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css'
import {FaHeart, FaShoppingCart} from 'react-icons/fa'
class Header extends Component {
    render() { 
        const {productsInWishList} = this.props;
        const {productsInCart} = this.props;
    return (
        <div>
            <Navbar variant='light'>
                <NavbarBrand href='/Home'>Home</NavbarBrand>

                <NavbarBrand className='navbarBrand'>Aurora</NavbarBrand>
                <Nav className='ml-auto'>
                    <NavItem>
                        <NavLink>
                            <FaHeart className='wishlistIcon'size={20}></FaHeart><span className='wishListIndex'>{productsInWishList.length}</span>
                        </NavLink>
                        <NavLink>
                            <FaShoppingCart className='shoppingCartIcon'size={20}></FaShoppingCart><span className='cartIndex'>{productsInCart.length}</span>
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