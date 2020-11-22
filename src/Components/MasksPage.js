import React from 'react'
import Navbar from './Header'
import Footer from './Footer'
import {FaShoppingCart, FaHeart} from 'react-icons/fa'
import {Button} from 'react-bootstrap'

import MissingImage from './Images/noImage.png'
import {store} from './store'
import $ from 'jquery'
export default function MasksPage() {
    const masksList=[
        {
            name: 'Game Mask - Фортнайт',
            image: MissingImage,
            price: 5,
            cents: 50
        },
        {
            name: 'Anime Mask - Naruto - Sasuke',
            image: MissingImage,
            price: 3,
            cents: 40
        },
    
    ]
    const addToWishlist=(id)=>{
        store.dispatch({type: 'addToFavorites', id: id})
        $('#'+id).css('color', 'purple')        
    }
    const addToCart=(id)=>{
        store.dispatch({type: 'addToCart', id:id})
    }
    return (
        
        <div>
            <Navbar></Navbar>
            <div className='products'>
                {masksList.map((mask, index)=>
                <div className='hoodieWrapper'>
                    <p className='hoodieName'><FaHeart onClick={()=>addToWishlist(index)}id={index} className='addFaves' size={25}/><strong>{mask.name}</strong> </p>     
                    <img className='hoodieImage' src={mask.image}></img>
                    <div className='purchaseField'>
                        <p><strong>{mask.price}.<span className='priceCents'>{mask.cents}</span> лв.</strong></p>
                        <Button className='buyHoodieButton' variant='warning' onClick={()=>addToCart(index)}><span className='buyIcon'><FaShoppingCart></FaShoppingCart></span> <strong>Купи</strong></Button>
                    </div> 
                </div>)}
            </div>
            <Footer></Footer>
        </div>
    )
}
