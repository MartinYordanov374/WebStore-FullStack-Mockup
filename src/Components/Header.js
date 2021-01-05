import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavbarBrand, NavItem, NavLink, FormControl, Button, InputGroup, Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css'
import {FaRegHeart, FaShoppingCart, FaRegUser, FaSearch, FaUserCheck, FaCaretRight} from 'react-icons/fa'
import {AiOutlineShoppingCart,AiOutlineUser} from 'react-icons/ai'
import {FiUserCheck} from 'react-icons/fi'


import {Redirect} from 'react-router-dom'
import $ from 'jquery'
class Header extends Component {
    render() { 
        const {productsInWishList} = this.props;
        const {productsInCart} = this.props;
        let isLoggedIn = document.cookie;
        let categories=[
            "hoodies",
            "hats",
            "masks",
        ]
        const SearchBar=()=>{
            let searchString = $('.searchBarValue').val().toLowerCase()
            const filtered = categories.filter((character)=>{
                 return(
                     character.includes(searchString)
                 
                 )
        })
            
            window.location=filtered[0]

            
        }
        const SearchBarSuggestions=()=>{
            let searchString = $('.searchBarValue').val().toLowerCase()
            const filtered = categories.filter((character)=>{
                 return(
                     character.includes(searchString)
                 
                 )
            })
                if(searchString.length>0){
                    $('.dropDown').show()
                }
                else{  
                    $('.dropDown').hide()

                }
            $('.dropdownValue').text(filtered[0]).val();

        
            }
        const goToPage=()=>{
            window.location='/'+$('.dropDownItemOne').text()
        }
    return (
        <div className='navbarWrapper sticky-top'>
            <Navbar expand='lg' className='sticky-top navbar' variant='light'>
                <NavbarBrand href='/Home'><span className='homeButton'><strong>Neon</strong></span></NavbarBrand>
                <Navbar.Toggle />
                <Navbar.Collapse>

                    <NavItem>
                        
                        <NavLink className='HoodiesLink' href='/Hoodies'>
                            <strong>Худита</strong>
                        </NavLink>
                        <NavLink className='MasksLink' href='/Masks'>
                            <strong>Маски</strong>
                        </NavLink>
                    </NavItem>
                        <div className='searchBar'>
                            <InputGroup >
                                <FormControl className='searchBarValue' placeholder='Потърсете продукт...' onChange={SearchBarSuggestions}/>
                                <InputGroup.Append>
                                    <InputGroup.Text className='searchButton' onClick={SearchBar}>
                                        <FaSearch/>
                                    </InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                            <Dropdown className='dropDown'>
                                    <Dropdown.Item className='dropDownItemOne' onClick={goToPage}>
                                        <p className='dropdownValue'></p>
                                    </Dropdown.Item>  
                            </Dropdown>
                        </div>
                    <Nav className='Icons'>
                        <NavItem>    
                            { isLoggedIn.length > 3 
                            ?                    
                            <NavLink href='/profilepage'>
                                <FiUserCheck className='loginLink' size={32}></FiUserCheck>
                            </NavLink>
                            :
                            <NavLink href='/Login'>
                                <AiOutlineUser className='loginLink' size={32}></AiOutlineUser>
                            </NavLink>
                            }
                            <NavLink href='/Wishlist'>
                                <FaRegHeart className='wishlistIcon'size={30}/><span className='wishListIndex'>{productsInWishList.length}</span>
                            </NavLink>
                            <NavLink href='/Cart'>
                                <AiOutlineShoppingCart  className='shoppingCartIcon'size={30}></AiOutlineShoppingCart><span className='cartIndex'>{productsInCart.length}</span>
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