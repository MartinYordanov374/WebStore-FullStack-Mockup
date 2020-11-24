import React, { Component } from 'react';
import {store} from './store'
import {Button} from 'react-bootstrap'
import {FaTrash, FaArrowLeft, FaArrowRight, FaTruck} from 'react-icons/fa'
import Navbar from './Header'
import Footer from './Footer'
import {connect} from 'react-redux'
import {v4} from 'uuid'
import './css/Cart.css'
import $ from 'jquery'

class ShoppingCart extends Component {
    render() {
        const {productsInCart} = this.props;
        let totalSumDollars = 0;
        const removeFromCart=(product)=>{
            store.dispatch({type:'removeFromCart', name: product.name, image: product.image, price: product.price, cents: product.cents, id: product.id})
        }
        const increaseQuantity=(product)=>{
            store.dispatch({type:'increase'})

        }
        const decreaseQuantity=(product)=>{
            if(product.quantity<=1){
               alert('ERROR')
            }
            if(product.quantity>=1){
                product.quantity-=1;
                alert(product.quantity)

            }
        }
        return (
            <div className='cartWrapper'>
                <Navbar></Navbar>
                {productsInCart.length==0 ?
                <p className='emptyCartAlert'>Вашата количка е празна!</p>
                 : ""}
                    <span className='productGuideWrapper'>
                        <span className='productIndexGuide'>Продукт</span>
                        <span className='productQuantityGuide'>Количество</span>
                        <span className='productPriceGuide'>Цена</span> 
                    </span>
                    <hr></hr>
                {productsInCart.map(product=>    
                <div className='productsWrapper'>
                    <p className='productName'>{product.name}</p>
                    <img className='productImage' src={product.image}/>
                    <p className='productPrice'>
                        <span className='productQuantity'>
                            <FaArrowLeft className='decreaseQuantity' size={20} onClick={()=>decreaseQuantity(product)}/>
                                <span className='quantity'>
                                    {product.quantity}
                                </span>
                            <FaArrowRight className='increaseQuantity' size={20} onClick={()=>increaseQuantity(product)}/>
                        </span> Цена: {Math.round(product.price*product.quantity*100)/100} лв.</p>
                    <FaTrash className='removeProduct' size={25} onClick={()=>removeFromCart(product)}></FaTrash>
                    <hr></hr>
                    <span className='calculateTotal'>{totalSumDollars+=product.price*product.quantity}</span>       
                </div>)
                }
                <p className='showTotal'>Общо: {Math.round(totalSumDollars*100)/100} лв.</p>
                <Button variant='warning' className='finishOrderButton'>
                    <strong>
                        <FaTruck className='deliveryIcon'size={20}/> Завърши поръчката
                    </strong>
                </Button>
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