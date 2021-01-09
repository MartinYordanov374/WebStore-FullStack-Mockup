import React, { Component } from 'react'
import {connect} from 'react-redux'
import './css/Products.css'
import $ from 'jquery'
import Hoodie from '../Components/Images/Hoodie_1.png'
import Mask from '../Components/Images/Hoodie_3.png'
import CarouselImage from '../Components/Images/openingstore_promotional.png'
import Sales from '../Components/Images/SALES.png'
import Navbar from './Header'
import Footer from './Footer'
import {Button, Carousel} from 'react-bootstrap'
class Products extends Component {
    render() {
        return (
            <div className='categoriesWrapper'>
                <Navbar></Navbar>
                <Carousel>
                    <Carousel.Item id='carouselItem'>
                        <img className='carouselImage' src={CarouselImage}/>
                    </Carousel.Item>
                    <Carousel.Item id='carouselItem'>
                        <img className='carouselImage' src={Sales}/>
                    </Carousel.Item>
                </Carousel>

                <div className='Categories col-sm-12 col-md-12 col-lg-12 col-xs-12'>
                    <div className='Hoodies'>
                        <div className='productImage'>
                            <img className='showProductImage' src={Hoodie}></img>
                            <a href='/men' className='CategoryLink'><p className='caption'><strong>Мъже</strong></p></a>
                        </div>
                    </div>

                    <div className='Masks'>
                        <div className='productImage'>
                            <img className='showProductImage' src={Mask}></img>
                            <a href='/women' className='CategoryLink'><p className='caption'><strong>Жени</strong></p></a>
                        </div>
                    </div>
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