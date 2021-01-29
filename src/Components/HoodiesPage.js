import React, {Component} from 'react'
import Navbar from './Header'
import Footer from './Footer'

import GreenHoodie from './Images/Hoodie_1.png'
import OrangeHoodie from './Images/Hoodie_2.png'
import './css/HoodiesStyle.css'
import {Button} from 'react-bootstrap'
import $ from 'jquery'
import {FaShoppingCart, FaHeart} from 'react-icons/fa'
import {store} from './store'
import {connect} from 'react-redux'
import {v4} from 'uuid'
import {Redirect} from 'react-router-dom'
import {AiOutlineShoppingCart, AiOutlineUser, AiOutlineHeart} from 'react-icons/ai'
class HoodiesPage extends Component {
    render(){
    let {productsInWishList} = this.props;
    let {productsInCart} = this.props;
    let isLoggedIn = document.cookie;
    const hoodiesList=[
        {
            name: 'Hoodie - Orange',
            image: GreenHoodie,
            price: 36.96,
            quantity: 1,
            id: v4()
        },
        {
            name: 'Hoodie - Green',
            image: OrangeHoodie,
            price: 39.94,
            quantity: 1,
            id:v4()
        },
    ]
    const addToWishlist=(product, id)=>{
        store.dispatch({type: 'addToFavorites', name: product.name, image: product.image, price: product.price, id: product.id, quantity: product.quantity})
        $('#'+id).css('color', 'purple')        
    }
    const addToCart=(product)=>{
        store.dispatch({type: 'addToCart', name: product.name, image: product.image, price: product.price, id: product.id, quantity: product.quantity})
        // storeInCookies();
        
    }
    // const storeInCookies=()=>{
    //     document.cookie=`products=${JSON.stringify(productsInCart)}; path=/Cart;`
        
    // }
    return (
        <div>
            <Navbar></Navbar>
            <div className='products'>
            {hoodiesList.map((hoodie, index)=>
                    <div className='exhibitionHoodiesWrapper'>
                        <div className='exhibitionImageWrapper'>
                            <p className='hoodieName'>{hoodie.name}</p>
                            <img className='exhibitionHoodieImage' src={hoodie.image}/>
                            <p className='hoodiePrice'>{hoodie.price} лв.</p>
                            {isLoggedIn.length>3
                            ?
                            <div className='actionButtonsWrapper'>                            
                                <Button className='btn-warning buyOnExhibition' onClick={()=>addToCart(hoodie)}><strong><AiOutlineShoppingCart size={25}/> Купи</strong></Button>
                                <Button className='btn-warning addToWishListButton' onClick={()=>addToWishlist(hoodie, index)}><strong><AiOutlineHeart className='addToWishListButtonIcon' size={25}/>  Добави в любими</strong></Button>
                            </div>                         
                            :
                            <div className='actionButtonsWrapper'>                            
                                <Button className='btn-danger buyOnExhibitionDisabled disabled'><strong><AiOutlineUser size={25}/> Не сте регистриран! </strong></Button>
                                <Button className='btn-warning addToWishListButton' onClick={()=>addToWishlist(hoodie, index)}><strong><AiOutlineHeart className='addToWishListButtonIcon' size={25}/>  Добави в любими</strong></Button>
                            </div>                            }
                        </div>
                    </div>)}
            </div>
            <Footer></Footer>
        </div>
    )
}
}
const mapStateToProps=(state={productsInWishList:[{}], productsInCart:[{}]})=>{
    return{
        productsInWishList: state.productsInWishList,
        productsInCart: state.productsInCart
    }
}
export default connect(mapStateToProps)(HoodiesPage)