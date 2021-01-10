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
class Products extends Component {
    render() {
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