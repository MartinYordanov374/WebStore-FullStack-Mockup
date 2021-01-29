import React from 'react'
import Navbar from './Header'
import Footer from './Footer'
import {FaShoppingCart, FaHeart} from 'react-icons/fa'
import {Button} from 'react-bootstrap'

import Hoodie_2 from './Images/Hoodie_Featured_5.png'
import Hoodie_4 from './Images/Hoodie_Featured_1.png'

import {store} from './store'
import $ from 'jquery'
import {v4} from 'uuid'
import {AiOutlineShoppingCart, AiOutlineUser, AiOutlineHeart} from 'react-icons/ai'

export default function MasksPage() {
    const hoodiesList=[   
        {
            name: 'Hoodie - Violet',
            image: Hoodie_2,
            price: 36.96,
            quantity: 1,
            id: v4()
        },
        {
            name: 'Hoodie - Skyblue',
            image: Hoodie_4,
            price: 39.94,
            quantity: 1,
            id: v4()
        },
    
    ]
    let isLoggedIn=document.cookie;
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
                            </div>
                           }
                        </div>
                    </div>)}
            </div>
            <Footer></Footer>
        </div>
    )
}