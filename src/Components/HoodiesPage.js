import React, {Component} from 'react'
import Navbar from './Header'
import Footer from './Footer'

import fortniteHoodie from './Images/Hoodies.png'
import kiritoHoodie from './Images/kirito_Hoodie.png'
import './css/HoodiesStyle.css'
import {Button} from 'react-bootstrap'
import $ from 'jquery'
import {FaShoppingCart, FaHeart} from 'react-icons/fa'
import {store} from './store'
import {connect} from 'react-redux'
import {v4} from 'uuid'
import {Redirect} from 'react-router-dom'
class HoodiesPage extends Component {
    render(){
    let {productsInWishList} = this.props;
    let {productsInCart} = this.props;
    let isLoggedIn = document.cookie;
    const hoodiesList=[
        {
            name: 'Game Hoodie - Фортнайт',
            image: fortniteHoodie,
            price: 36.96,
            quantity: 1,
            id: v4()
        },
        {
            name: 'Anime Hoodie - Sword Art Online - Кирито',
            image: kiritoHoodie,
            price: 39.94,
            quantity: 1,
            id:v4()
        },
    ]
    const addToWishlist=(id, product)=>{
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
                <div className='hoodieWrapper'>
                    <p className='hoodieName'><FaHeart id={index} className='addFaves' onClick={()=>addToWishlist(index, hoodie)}size={25}/><strong>{hoodie.name}</strong> </p>     
                    <img className='hoodieImage' src={hoodie.image}></img>
                    {isLoggedIn.length>3 ?
                    <div className='purchaseField'>
                        <p><strong>{hoodie.price} лв.</strong></p>
                        <Button className='buyHoodieButtonActive' variant='warning' onClick={()=>addToCart(hoodie)}><span className='buyIcon'><FaShoppingCart></FaShoppingCart></span> Купи</Button>
                    </div> 
                    :
                    <div className='purchaseField'>
                        <p><strong>{hoodie.price} лв.</strong></p>
                        <Button className='buyHoodieButtonDisabled' variant='warning' disabled='disabled' onClick={()=>addToCart(hoodie)}><span className='buyIcon'><FaShoppingCart></FaShoppingCart></span> <strong>Не сте регистриран</strong></Button>
                    </div> 
                }
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