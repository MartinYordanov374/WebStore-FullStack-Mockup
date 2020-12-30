import React, {Component} from 'react'
import {connect} from 'react-redux'
import Navbar from './Header'
import Footer from './Footer'
import {Button} from 'react-bootstrap'
import {FaTruck} from 'react-icons/fa'
import {Redirect} from 'react-router-dom'
import './css/orderFinished.css'
import {store} from './store'
class orderFinished extends Component {
    render(){
        let {productsOrdered} = this.props;
        let isLoggedIn = document.cookie;
        console.log(productsOrdered.length)
        const returnHome=()=>{
            store.dispatch({type: 'clearProductsOrdered'})
            if(productsOrdered.length<=0){
             window.location='/home'
            }

        }
    return (
        <div>
            <Navbar/>

            {isLoggedIn.length>3 && productsOrdered.length>0
            ?
            <div className='infoBox'>
                <h1>Вие завършихте поръчката си!</h1>
                <hr className='borderLine'></hr>
                <div className='orderInfoContainer'>
                    <div className='productsInfo'>
                        <p>Products</p>
                        <hr className='borderLine'></hr>
                        {productsOrdered.map(product=>
                            <div>
                                <p>{product.products}</p>
                            </div>)}
                    </div>
                    <div className='quantityInfo'>
                        <p>Quantity</p>
                        <hr className='borderLine'></hr>

                        {productsOrdered.map(product=>
                            <div>
                                <p>{product.quantity}</p>
                            </div>)}

                    </div>
                    <div className='priceInfo'>
                        <p>Price</p>
                        <hr className='borderLine'></hr>

                        {productsOrdered.map(product=>
                            <div>
                                <p>{product.price}</p>
                            </div>)}
                    </div>
                </div>
                </div>:
               <Redirect to='/home'/>}
               <Button className='btn-warning returnButton' onClick={returnHome}><strong>Обратно към началната страница</strong></Button>
            <Footer/>
        </div>
    )
}
}

const mapStateToProps=(state={productsInCart:[{}], productsOrdered: [{}]})=>{
    return{
        productsInCart: state.productsInCart,
        productsOrdered: state.productsOrdered
    }
}
export default connect(mapStateToProps)(orderFinished)