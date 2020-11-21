import React from 'react'
import Navbar from './Header'
import Footer from './Footer'

import fortniteHoodie from './Images/Hoodies.png'
import kiritoHoodie from './Images/kirito_Hoodie.png'
import './css/HoodiesStyle.css'
import {Button} from 'react-bootstrap'
import $ from 'jquery'
import {FaShoppingCart, FaHeart} from 'react-icons/fa'

export default function HoodiesPage() {
    const hoodiesList=[
        {
            name: 'Game Hoodie - Фортнайт',
            image: fortniteHoodie,
            price: 36,
            cents: 96
        },
        {
            name: 'Anime Hoodie - Sword Art Online - Кирито',
            image: kiritoHoodie,
            price: 39,
            cents: 94
        },
    ]
    const addToWishlist=()=>{
        $('.addFaves').css('color', 'purple')
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='products'>
                {hoodiesList.map(hoodie=>
                <div className='hoodieWrapper'>
                    <p className='hoodieName'><FaHeart className='addFaves' onClick={()=>addToWishlist()}size={25}></FaHeart><strong>{hoodie.name}</strong> </p>     
                    <img className='hoodieImage' src={hoodie.image}></img>
                    <div className='purchaseField'>
                        <p><strong>{hoodie.price}.<span className='priceCents'>{hoodie.cents}</span> лв.</strong></p>
                        <Button className='buyHoodieButton' variant='warning'><span className='buyIcon'><FaShoppingCart></FaShoppingCart></span> <strong>Купи</strong></Button>
                        {/* <br></br> */}
                        {/* <Button className='faveHoodieButton' variant='warning'><span className='faveIcon'><FaHeart></FaHeart></span> <strong>Добави в любими</strong></Button> */}
                    </div> 
                </div>)}
            </div>
            <Footer></Footer>
        </div>
    )
}
