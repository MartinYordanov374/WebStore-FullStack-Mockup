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

import {v4} from 'uuid'

class Products extends Component {
    
    render() {
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
            price: 5.50,
            quantity: 1,
            id: v4()
        },
        {
            name: 'Neon Hoodie',
            image: Hoodie_4,
            price: 3.40,
            quantity: 1,
            id: v4()
        },
    
    ]
    const addToWishlist=(product, id)=>{
        store.dispatch({type: 'addToFavorites', name: product.name, image: product.image, price: product.price, id: product.id, quantity: product.quantity})
 
        $('#'+id).css('color', 'purple')     
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
                <hr></hr>

                <div className='Categories col-sm-12 col-md-12 col-lg-12 col-xs-12'>
                    <h1 className='featured'>Специални оферти</h1>
                    <hr></hr>
                    <Carousel>
                        <Carousel.Item>
                            <div className='Hoodies'>
                                    <img className='showProductImage' href = '/women' src={Hoodie_Featured_One}></img>
                                    {/* <a href='/men' className='CategoryLink'><p className='caption'><strong>Мъже</strong></p></a> */}
                                    <img className='showProductImage' href='/women'src={Hoodie_Featured_Two}></img>
                                    
                                    <img className='showProductImage' href = '/men' src={Hoodie_Featured_Three}></img>

                                    {/* <a href='/men' className='CategoryLink'><p className='caption'><strong>Мъже</strong></p></a> */}
                            </div>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='Hoodies'>
                                {/* <div className='productImage'> */}
                                    <img className='showProductImage' src={Hoodie_Featured_Four}></img>
                                    <img className='showProductImage' src={Hoodie_Featured_Five}></img>
                                    <img className='showProductImage' src={Hoodie_Featured_Six}></img>

                                    {/* <a href='/women' className='CategoryLink'><p className='caption'><strong>Жени</strong></p></a> */}
                                {/* </div> */}
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <hr></hr>

                <div className='MenHoodies' id='goToMen'>
                    <h2>Мъже</h2>
                    {menHoodiesList.map((hoodie, index)=>
                    <div className='exhibitionHoodiesWrapper'>
                        <div className='exhibitionImageWrapper'>
                            <p className='addFaves'><FaHeart onClick={()=>addToWishlist(hoodie, index)} id={index} size={25}/></p>
                            <img className='exhibitionHoodieImage' src={hoodie.image}/>
                        </div>
                    </div>)}
                </div>
                <a className='goToCategoryLink' href='/Men'>Вижте още от тази категория</a>
                <hr></hr>
                <div className='WomenHoodies' id='goToWomen'> 
                    <h2>Жени</h2>
                    {womenHoodiesList.map((hoodie, index)=>
                    <div className='exhibitionHoodiesWrapper'>
                        <div className='exhibitionImageWrapper'>
                            <p className='addFaves'><FaHeart onClick={()=>addToWishlist(hoodie, index)} id={index} size={25}/></p>
                            <img className='exhibitionHoodieImage' src={hoodie.image}/>
                        </div>
                    </div>)}
                </div>
                <a className='goToCategoryLink' href='/Women'>Вижте още от тази категория</a>
                
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