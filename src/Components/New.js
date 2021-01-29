import {Navbar, Button} from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import React from 'react'
import HoodieImage from './Images/Hoodie_1.png'
import './css/newPage.css'
import {store} from './store'
import {AiOutlineShoppingCart, AiOutlineHeart} from 'react-icons/ai'
import {v4} from 'uuid'
function New() { 
    let isLoggedIn = document.cookie;
    const newItems=[   
        // {
        //     name: 'Hoodie',
        //     image: HoodieImage,
        //     price: 20,
        //     quantity: 1,
        //     id: v4()
        // },
        // {
        //     name: 'Hoodie',
        //     image: HoodieImage,
        //     price: 20,
        //     quantity: 1,
        //     id: v4()
        // },
    ]
    const addToCart=(product)=>{
        store.dispatch({type: 'addToCart', name: product.name, image: product.image, price: product.price, quantity: product.quantity, id: v4()})
    }
    return (
        <div>
            <Header></Header>
            <div className='newItemsWrapper'>
                {newItems.length > 0 ?
                    newItems.map((item, index)=>
                    <div>
                        <p className='hoodieName'>{item.name}</p>
                        <div className='newItemImageWrapper'>
                            <img className='productImage' src={item.image}></img>
                        </div>
                        <p className='productPrice'>{item.price} лв.</p>
                        {isLoggedIn.length>3 
                        ?
                        <div className='actionButtonsWrapper'>
                            <Button className='btn-warning buyOnExhibition' onClick={()=>addToCart(item)}><strong><AiOutlineShoppingCart size={25}/> Купи</strong></Button>
                            <Button className='btn-warning addToWishListButton' onClick={()=>addToWishlist(item, index)}><strong><AiOutlineHeart className='addToWishListButtonIcon' size={25}/>  Добави в любими</strong></Button>
                        </div>
                        :
                        <div className='actionButtonsWrapper'>
                            <Button className='btn-danger buyOnExhibitionDisabled disabled'><strong><AiOutlineUser size={25}/> Не сте регистриран! </strong></Button>
                            <Button className='btn-warning addToWishListButton' onClick={()=>addToWishlist(item, index)}><strong><AiOutlineHeart className='addToWishListButtonIcon' size={25}/>  Добави в любими</strong></Button>
                        </div>
                        }
                    </div>)
                    
                    :
                 <p className='noNewItemsAlert'>Съжаляваме, но все още нямаме нови продукти.</p>
                }
            </div>
            
            <Footer/>
        </div>
    )
}

export default New
