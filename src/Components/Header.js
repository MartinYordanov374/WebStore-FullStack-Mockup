import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavbarBrand, NavItem, NavLink} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css'
import {FaHeart, FaShoppingCart} from 'react-icons/fa'
class Header extends Component {
    render() { 
        const {productsInWishList} = this.props;
    return (
        <div>
            <Navbar variant='light'>
                <NavbarBrand href='/Home'>Home</NavbarBrand>

                <NavbarBrand className='navbarBrand'>Aurora</NavbarBrand>
                <Nav className='ml-auto'>
                    <NavItem>
                        <NavLink>
                            <FaHeart className='wishlistIcon'size={20}></FaHeart>{productsInWishList.length}
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
}
const mapStateToProps=(state={productsInWishList:[{}]})=>{
    return{
        productsInWishList: state.productsInWishList
    }
}
export default connect(mapStateToProps)(Header)