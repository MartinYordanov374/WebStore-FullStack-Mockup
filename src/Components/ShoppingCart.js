import React, { Component } from 'react';
import {store} from './store'
import {Button, FormControl} from 'react-bootstrap'
import {FaTrash, FaArrowLeft, FaArrowRight, FaTruck} from 'react-icons/fa'
import Navbar from './Header'
import Footer from './Footer'
import Login from './Login'
import {connect} from 'react-redux'
import {v4} from 'uuid'
import './css/Cart.css'
import $ from 'jquery'
import Axios from 'axios'

class ShoppingCart extends Component {
    render() {
        const {productsInCart} = this.props;
        let totalSumDollars = 0;
        let isLoggedIn = document.cookie;
        
        const removeFromCart=(product)=>{
            store.dispatch({type:'removeFromCart', name: product.name, image: product.image, price: product.price, cents: product.cents, id: product.id})
        }
        const increaseQuantity=(product)=>{
            store.dispatch({type:'increase', id: product.id})

        }
        const decreaseQuantity=(product)=>{
            store.dispatch({type:'decrease', id: product.id})
        }

        const showProducts=()=>{
            let addItem = false;
            if($('.enterName').val().length > 2 && $('.enterAddress').val().length > 0 && $('.enterPhone').val().length>8){

            for(var i =0; i<=productsInCart.length-1;i++)
            {
                Axios.post('http://localhost:3307/finishOrder',{
                       username: document.cookie.split(';').pop(),
                       name: $('.enterName').val(),
                       phone: $('.enterPhone').val(),
                       address: $('.enterAddress').val(),
                       products: productsInCart[i].name,
                       quantity: productsInCart[i].quantity,
                       price: totalSumDollars
                   }).then((response)=>{
                       console.log(response)
                })
                addItem=true;
                console.log(addItem)
                if(addItem){
                    store.dispatch({type: 'finishOrder', products: productsInCart[i].name, quantity:productsInCart[i].quantity, price: productsInCart[i].price})
                    store.dispatch({type: 'clearCart'})
                    if(i==productsInCart.length-1){
                        // window.location='/orderfinished'
                    }
                    addItem=false;

                }
            
            Axios.post('http://localhost:3307/getEmail',{
                username: document.cookie.split(';').pop()
            }).then((response)=>{

                Axios.post('http://localhost:3307/sendEmail',{
                    username: document.cookie.split(';').pop(),
                    email: response.data.messageTwo[0].email


                })
            })
        }
        }
        


            
        }
        const checkLogin=()=>{
            if(isLoggedIn.length<3){
            store.dispatch({type: 'clearCart'})}
        }
        return (
            <div className='cartWrapper' onLoad={()=>checkLogin()}>
                <Navbar></Navbar>
                <div className='actualCartWrapper'>
                        {productsInCart.length==0 && isLoggedIn.length>3 ?
                        <p className={productsInCart.length==0 ? 'emptyCartAlert' : ""}>Вашата количка е празна!</p>
                        : ""}
                        {isLoggedIn.length<3 ?
                            <p className={productsInCart.length==0 ? 'emptyCartAlert' : ""}>Изглежда не сте влязъл в профила си</p>
                            :
                            ""
                        }
                        
                        <div className={isLoggedIn.length>3 && productsInCart.length>0 ? 'cartHeadingWrapper' : 'hideObject'}>
                            <h1 className='cartHeadingText'>Вашата количка</h1>
                            <hr></hr>
                        </div>
                        <div className={isLoggedIn.length>3 && productsInCart.length>0 ? 'productGuideWrapper col-sm-12 col-md-12 col-lg-12 col-xs-12' : 'hideObject'}>
                            <p className='productIndexGuide'>Продукт</p>
                            <p className='productQuantityGuide'>Количество</p>
                            <p className='productPriceGuide'>Цена</p>
                        </div>
                        <hr className={isLoggedIn.length>3 && productsInCart.length>0 ? '' : 'hideObject'}></hr>

                        {productsInCart.map(product=>  
                            <div className='productsWrapper col-sm-12 col-md-12 col-lg-12 col-xs-12'>
                                <p className='productName'>{product.name}</p>
                                <img className='productImage' src={product.image}/>
                                <p className='productPrice'>
                                    <span className='productQuantity'>
                                        <FaArrowLeft className='decreaseQuantity' size={20} onClick={()=>decreaseQuantity(product)}/>
                                            <span className='quantity'>
                                                {product.quantity}                                               
                                            </span>
                                        <FaArrowRight className='increaseQuantity' size={20} onClick={()=>increaseQuantity(product)}/>
                                    </span> {Math.round(product.price*product.quantity*100)/100} лв.</p>
                                    
                                    <span><FaTrash className='removeProduct' size={25} onClick={()=>removeFromCart(product)}></FaTrash></span>                                
                                <hr></hr>
                                <span className='calculateTotal'>{totalSumDollars+=product.price*product.quantity}</span>       
                            </div>)    
                        }  
                </div>
                {productsInCart.length>0 && isLoggedIn.length>3
                        ?
                <div className='finishOrderDiv'>

                        
                        <div>
                            <h1>Завършване на поръчката</h1>
                            <p className='enterNameNotification'>Име</p>
                            <FormControl className='enterName' placeholder='Въведете име'></FormControl>

                            <p className='enterAddressNotification'>Адрес</p>
                            <FormControl className='enterAddress' placeholder='Въведете адрес'></FormControl>
                            <p className='enterPhoneNotification'>Телефон</p>

                            <FormControl className='enterPhone' placeholder='Въведете телефон'></FormControl>
                            <p className='showTotal'>Общо: {Math.round(totalSumDollars*100)/100} лв.</p>
                            
                            
                        
                            <Button variant='warning' className='finishOrderButton' onClick={showProducts}>
                                <strong>
                                    <span className='deliveryIcon'> <FaTruck size={20}/> Завърши поръчката </span>
                                </strong>
                            </Button>

                        </div>
                    </div>
                    :
                    ""}

            </div>
            
            
        );
    }
}

const mapStateToProps=(state={productsInWishList:[{}], productsInCart:[{}], productsOrdered: [{}] })=>{
    return{
        productsInWishList: state.productsInWishList,
        productsInCart: state.productsInCart,
        productsOrdered: state.productsOrdered
    }
}

export default connect(mapStateToProps)(ShoppingCart);