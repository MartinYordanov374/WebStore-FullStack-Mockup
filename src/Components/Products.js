import React, { Component } from 'react'
import {connect} from 'react-redux'
import './css/Products.css'
import $ from 'jquery'
import Hoodie from '../Components/Images/Hoodie_1.png'
import Hoodie_Featured_One from '../Components/Images/Hoodie_Featured_1.png'
import Hoodie_Featured_Two from '../Components/Images/Hoodie_Featured_2.png'
import Hoodie_Featured_Three from '../Components/Images/Hoodie_Featured_3.png'
import Hoodie_Featured_Four from '../Components/Images/Hoodie_Featured_4.png'
import Hoodie_Featured_Five from '../Components/Images/Hoodie_Featured_5.png'
import Hoodie_Featured_Six from '../Components/Images/Hoodie_Featured_6.png'
import Mask from '../Components/Images/Hoodie_3.png'
import CarouselImage from '../Components/Images/neon_special.png'
import Sales from '../Components/Images/SALES.png'
import Navbar from './Header'
import Footer from './Footer'
import {Button, Carousel} from 'react-bootstrap'
import GreenHoodie from '../Components/Images/Hoodie_1.png'
import OrangeHoodie from '../Components/Images/Hoodie_Featured_4.png'
import Hoodie_2 from '../Components/Images/Hoodie_Featured_2.png'
import Hoodie_4 from '../Components/Images/Hoodie_Featured_1.png'
import {store} from './store'
import {FaHeart} from 'react-icons/fa'
import {AiOutlineShoppingCart, AiOutlineUser, AiOutlineHeart} from 'react-icons/ai'
import {v4} from 'uuid'

class Products extends Component {
    
    render() {
        let isLoggedIn=document.cookie;
        const menHoodiesList=[
            {
                name: 'Neon Hoodie',
                image: GreenHoodie,
                price: 36.96,
                quantity: 1,
                id: v4()
            },
            {
                name: 'Neon Hoodie',
                image: OrangeHoodie,
                price: 39.94,
                quantity: 1,
                id:v4()
            },
        ]
        const womenHoodiesList=[   
        {
            name: 'Neon Hoodie',
            image: Hoodie_2,
            price: 36.96,
            quantity: 1,
            id: v4()
        },
        {
            name: 'Neon Hoodie',
            image: Hoodie_4,
            price: 39.94,
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
            <div className='categoriesWrapper'>
                <Navbar></Navbar>
                <Carousel id='carouselMainPage'> 
                    <Carousel.Item id='carouselItem'>
                        <img className='carouselImage' src={CarouselImage}/>
                    </Carousel.Item>
                    <Carousel.Item id='carouselItem'>
                        <img className='carouselImage' src={Sales}/>
                    </Carousel.Item>
                </Carousel>

                <div className='Categories col-sm-12 col-md-12 col-lg-12 col-xs-12'>
                    <h1 className='featured'>Примерни цветове</h1>
                    <hr></hr>
                    <Carousel>
                        <Carousel.Item>
                            <div className='Hoodies'>
                                    <img className='showProductImage' src={Hoodie_Featured_One}/>
                                    {/* <a href='/men' className='CategoryLink'><p className='caption'><strong>Мъже</strong></p></a> */}
                                    <img className='showProductImage' src={Hoodie_Featured_Two}/>
                                    
                                    <img className='showProductImage' src={Hoodie_Featured_Three}/>

                                    {/* <a href='/men' className='CategoryLink'><p className='caption'><strong>Мъже</strong></p></a> */}
                            </div>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='Hoodies'>
                                {/* <div className='productImage'> */}
                                    <img className='showProductImage' src={Hoodie_Featured_Four}/>
                                    <img className='showProductImage' src={Hoodie_Featured_Five}/>
                                    <img className='showProductImage' src={Hoodie_Featured_Six}/>

                                    {/* <a href='/women' className='CategoryLink'><p className='caption'><strong>Жени</strong></p></a> */}
                                {/* </div> */}
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <hr></hr>

                <div className='MenHoodies' id='goToMen'>
                    <h1 className='categoryName'>Мъже</h1>
                    <hr></hr>
                    {menHoodiesList.map((hoodie, index)=>
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
                <a className='goToCategoryLink' href='/Men'>Вижте още от тази категория</a>
                <hr></hr>
                <div className='WomenHoodies' id='goToWomen'> 
                    <h1  className='categoryName'>Жени</h1>
                    <hr></hr>
                    {womenHoodiesList.map((hoodie, index)=>
                    <div className='exhibitionHoodiesWrapper'>
                        <div className='exhibitionImageWrapper'>
                            {/* <p className='addFaves'><FaHeart onClick={()=>addToWishlist(hoodie, index)} id={index} size={25}/></p> */}
                            <div className='hoodieWrapper'>
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
                        </div>
                    </div>)}
                </div>
                <a className='goToCategoryLink' href='/Women'>Вижте още от тази категория</a>
                <hr></hr>
                <Footer></Footer>
            </div>
        )
    }
}
const mapStateToProps=(state={products:[{}], productsInCart:[{}]})=>{
    return{
        products: state.products,
        productsInCart: state.productsInCart
    }
}

export default connect(mapStateToProps)(Products)