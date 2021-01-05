import React, { Component } from 'react'
import {connect} from 'react-redux'
import './css/Products.css'
import $ from 'jquery'
import Hoodie from '../Components/Images/Hoodies.png'
import Mask from '../Components/Images/Masks.png'
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

                <div className='Categories'>
                    <div className='Hoodies'>
                        <img className='productImage' src={Hoodie}></img>
                        <br></br>
                        <Button variant='success' className='goToHoodiesButton' href='/Hoodies'><strong>Към страницата с Худита</strong></Button>
                    </div>
                    <div className='Masks'>
                        <img className='productImage' src={Mask}></img>
                        <br></br>
                        <Button variant='success' className='goToMasksButton' href='/Masks'><strong>Към страницата с Маски</strong></Button>
                    </div>
                </div>
                {/* <div className='categoriesWrapper'>
                        <Carousel>
                            <Carousel.Item>
                                <img className='hoodieLink' src={Hoodie}/>
                                <Carousel.Caption id='caption'>
                                    <strong>HOODIES</strong>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='hoodieLink' src={Mask}/>
                                <Carousel.Caption id='caption'>
                                    <strong>MASKS</strong>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                </div> */}
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