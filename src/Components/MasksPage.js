import React from 'react'
import Navbar from './Header'
import Footer from './Footer'
import {FaShoppingCart, FaHeart} from 'react-icons/fa'
import {Button} from 'react-bootstrap'

import MissingImage from './Images/noImage.png'
import {store} from './store'
import $ from 'jquery'
import {v4} from 'uuid'
export default function MasksPage() {
    const masksList=[
        {
            name: 'Game Mask - Фортнайт',
            image: MissingImage,
            price: 5.50,
            quantity: 1,
            id: v4()
        },
        {
            name: 'Anime Mask - Naruto - Sasuke',
            image: MissingImage,
            price: 3.40,
            quantity: 1,
            id: v4()
        },
    
    ]
    const addToWishlist=(product, id)=>{
        store.dispatch({type: 'addToFavorites', name: product.name, image: product.image, price: product.price, id: product.id, quantity: product.quantity})
 
        $('#'+id).css('color', 'purple')     
    }
    const addToCart=(product)=>{
        store.dispatch({type: 'addToCart', name: product.name, image: product.image, price: product.price, id: product.id, quantity: product.quantity})
    }
    return (
        
        <div>
            <Navbar></Navbar>
            <div className='products'>
                {masksList.map((mask, index)=>
                <div className='hoodieWrapper'>
                    <p className='hoodieName'><FaHeart onClick={()=>addToWishlist(mask, index)} className='addFaves' id={index} size={25}/><strong>{mask.name}</strong> </p>     
                    <img className='hoodieImage' src={mask.image}></img>
                    <div className='purchaseField'>
                        <p><strong>{mask.price} лв.</strong></p>
                        <Button className='buyHoodieButton' variant='warning' onClick={()=>addToCart(mask)}><span className='buyIcon'><FaShoppingCart></FaShoppingCart></span> <strong>Купи</strong></Button>
                    </div> 
                </div>)}
            </div>
            <Footer></Footer>
        </div>
    )
}
