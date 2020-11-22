import React, {Component} from 'react'
import Navbar from './Header'
import Footer from './Footer'

import fortniteHoodie from './Images/Hoodies.png'
import kiritoHoodie from './Images/kirito_Hoodie.png'
import './css/HoodiesStyle.css'
import {Button} from 'react-bootstrap'
import $ from 'jquery'
import {FaShoppingCart, FaHeart} from 'react-icons/fa'
import {store} from './store'
import {connect} from 'react-redux'
class HoodiesPage extends Component {
    render(){
    let {wishList} = this.props;
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
    const addToWishlist=(id)=>{
        store.dispatch({type: 'addToFavorites', id: id})
        $('#'+id).css('color', 'purple')
        
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='products'>
                {hoodiesList.map((hoodie, index)=>
                <div className='hoodieWrapper'>
                    <p className='hoodieName'><FaHeart id={index} className='addFaves' onClick={()=>addToWishlist(index)}size={25}></FaHeart><strong>{hoodie.name}</strong> </p>     
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
}
const mapStateToProps=(state={productsInWishList:[{}]})=>{
    return{
        productsInWishList: state.productsInWishList
    }
}
export default connect(mapStateToProps)(HoodiesPage)