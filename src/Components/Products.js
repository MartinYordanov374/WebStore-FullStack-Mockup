import React, { Component } from 'react'
import {connect} from 'react-redux'
import './css/Products.css'
import $ from 'jquery'
import Hoodie from '../Components/Images/Hoodies.png'
import Mask from '../Components/Images/Masks.png'
import Navbar from './Header'
import Footer from './Footer'
import {Button} from 'react-bootstrap'
import SecondNavbar from './SecondNavbar'
class Products extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <SecondNavbar/>
                <div className='Categories'>
                    <div className='Hoodies'>
                        <img src={Hoodie}></img>
                        <br></br>
                        <Button variant='success' className='goToHoodiesButton' href='/Hoodies'><strong>Към страницата с Худита</strong></Button>
                    </div>
                    <div className='Masks'>
                        <img src={Mask}></img>
                        <br></br>
                        <Button variant='success' className='goToMasksButton' href='/Masks'><strong>Към страницата с Маски</strong></Button>
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