import React, { Component } from 'react';
import {store} from './store'
import {Button} from 'react-bootstrap'
import {FaShoppingCart, FaHeart} from 'react-icons/fa'
import Navbar from './Header'
import Footer from './Footer'
import {connect} from 'react-redux'

import './css/Cart.css'

class ShoppingCart extends Component {
    render() {
        const {productsInCart} = this.props;
        let totalSumDollars = 0;    
        return (
            <div className='cartWrapper'>
                <Navbar></Navbar>
                {productsInCart.map(product=>
                
                <div className='productsWrapper'>
                    <p className='productName'>{product.name}</p>
                    <img className='productImage' src={product.image}/>
                    <p className='productPrice'>{product.price} лв.</p>
                    <hr></hr>  
                    <span className='calculateTotal'>{totalSumDollars+=product.price}</span>          
                </div>)
                }
                <p className='showTotal'>Общо: {Math.round(totalSumDollars*100)/100} лв.</p>
                <Footer></Footer>
            </div>
        );
    }
}

const mapStateToProps=(state={productsInWishList:[{}], productsInCart:[{}]})=>{
    return{
        productsInWishList: state.productsInWishList,
        productsInCart: state.productsInCart
    }
}

export default connect(mapStateToProps)(ShoppingCart);