import React, { Component } from 'react'
import Navbar from './Header'
import {Button} from 'react-bootstrap'
import {FaShoppingCart, FaTrash} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import {BsX} from 'react-icons/bs'
import {connect} from 'react-redux'
import './css/Wishlist.css'
import {store} from './store'

class Wishlist extends Component {
    render(){
        let isLoggedIn = document.cookie;
        const {productsInWishList} = this.props;
        const addToCart=(product)=>{
            store.dispatch({type: 'addToCart', name: product.name, image: product.image, price: product.price, id: product.id, quantity: product.quantity})

        }
        const notLoggedIn=()=>{
            alert('За да добавяте в количката, трябва да сте регистриран')
        }
        const removeFromWishList=(product)=>{
            store.dispatch({type:'removeFromWishList', name: product.name, image: product.image, price: product.price, cents: product.cents, id: product.id})
        }
        console.log(productsInWishList.length<=0)
        return (
            <div>
                <Navbar/>
                <div className={productsInWishList.length<=0 ? '' : 'wishlistWrapper'}>
                        {productsInWishList.length<=0 ?
                        
                        <p className='emptyWishlist'>Вашият лист с любими е празен.</p> 
                        :
                        <div className='wishlistContainer'>
                            <p className='wishlistHeading'>Любими продукти</p>
                            <hr/>
                            {productsInWishList.map((product)=>    
                                <div className='productsWishListWrapper'>
                                    <p className='productName'> <strong>{product.name}</strong>
                                        <span>
                                            <BsX className='removeProduct' size={25} onClick={()=>removeFromWishList(product)}/>
                                        </span>
                                    </p>
                                    <img className='productImageWishlist' src={product.image}/>
                                    <p className='productPrice'> <strong>{product.price} лв.</strong> </p>
                                    <Button className={isLoggedIn ? 'btn-warning addProductButton' : 'btn-danger'} onClick={isLoggedIn ? ()=>addToCart(product) : ()=>notLoggedIn()}><AiOutlineShoppingCart className='addProductIcon' size={25} onClick={()=>addToCart(product)}/> <strong>{isLoggedIn ?"Добави в количката" : "Не сте влезли в профила си"}</strong></Button>
                                </div>)}
                        </div>}
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state={productsInWishList:[{}]})=>{
    return{
        productsInWishList: state.productsInWishList,
    }
}

export default connect(mapStateToProps)(Wishlist);