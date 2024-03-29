import React, {useState, useEffect, Component} from 'react'
import './css/login.css'
import Navbar from './Header'
import Footer from './Footer'
import {connect} from 'react-redux'
import {FormControl, Button, Alert} from 'react-bootstrap'
import {FaCog, FaTrash, FaWrench, FaPaperPlane} from 'react-icons/fa'
import {AiOutlineLogout} from 'react-icons/ai'
import {Redirect} from 'react-router-dom'
import Axios from 'axios'
import {store} from './store'
import $ from 'jquery'
import './css/profilepage.css'

class ProfilePage extends Component {

    render(){
    let cookieUsername = document.cookie;
    const {orderHistory} = this.props; 

    const showOrderHistory=()=>{

        $('.showHistoryButton').fadeOut()
        $('.historyIndexes').fadeIn()
        $('.clearHistoryButton').fadeIn()
            console.log('order history updated')
            Axios.post('http://localhost:3307/orderHistory', {
                username: cookieUsername
                }).then((response)=>{
                let length = response.data.message[0].occurences;
                Axios.post('http://localhost:3307/seeOrders', {
                        username: cookieUsername,
                }).then((response)=>{
                    for(var i =0; i<=length-1; i++)
                        {
                            store.dispatch({type: 'showOrderHistory', 
                                products: 
                                    response.data.message[i].products, 
                                quantity:
                                    response.data.message[i].quantity,
                                price:
                                    response.data.message[i].price,
                                orderStatus:
                                    response.data.message[i].orderStatus})
                         }
                         console.log(response)

                     })

                })
        
            
    }
    const clearOrderHistory=()=>{
        
        $('.showHistoryButton').fadeIn()
        $('.historyIndexes').fadeOut()
        $('.clearHistoryButton').fadeOut()
        store.dispatch({type: 'clearOrderHistory'})
    }
    const logout=()=>{
        document.cookie=`${cookieUsername}; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
        store.dispatch({type: 'clearOrderHistory'})
        store.dispatch({type: 'clearCart'})
        window.location='/login'
    }
    const deleteProfile=()=>{
        let usernameDelete = cookieUsername;
        document.cookie=`${cookieUsername}; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
        Axios.post('http://localhost:3307/delete', {
            username: usernameDelete
        }).then((response)=>{
            console.log(response)
        })
        window.location='/Home'
    }
    const changePass=()=>{
        window.location='/changePass'
    }
    return (
        <div className='profilePageWrapper'>
            <Navbar/>
            <div className='profileWrapper'>
                <div className='profileGreeting'>
                    {cookieUsername==0
                    ?
                        <Redirect to='/Home'/>

                    :
                        <span className='greetUserField'>
                            <strong>
                                Добре Дошли, <span className='greetingPlaceholder'>{cookieUsername} !</span>
                            </strong>
                        </span>

                    }
                    </div>
                    {/* <hr className='borderLine'></hr> */}
                    <div className='profileMenu'>
                        <div className='optionsTitle'>
                            <strong>
                                <FaCog size={25}/> Настройки
                            </strong>
                        </div>
                        <div className='orderHistoryTitle'>
                                <FaPaperPlane size={25}/> 
                                <strong>
                                    История на поръчките
                                </strong>
                        </div>
                    </div>
                    <div className='dashboard'>
                         <div className='options'>

                        {cookieUsername.length>0?
                        <div className='optionsMenu'>
                          <div className='optionsButtons'>
                            <Button className='btn-info' onClick={logout}>
                            
                                <span className='logOutButton'>
                                        <AiOutlineLogout size={20}/>
                                        <strong> Излез от профила си</strong>
                                </span>
                            </Button>

                            <Button className='btn-warning' onClick={changePass}>
                                <span className='changePassButton'>
                                    <FaWrench size={20}/>
                                    <strong> Промени паролата си </strong>
                                </span>
                            </Button>

                            <Button className='btn-danger' onClick={deleteProfile}>
                                <span className='deleteAccButton'>

                                        <FaTrash size={20}/>
                                        <strong>  
                                            Изтрий профила си
                                        </strong>
                                </span>
                            </Button>
                        </div>
                    </div>
                        :
                       ""}


                    </div>
                        <div className='orderHistory'>
                           
                            <div className='orderButtons'>
                                <Button className='clearHistoryButton' onClick={clearOrderHistory}>Скрий историята</Button>
                                <Button className='showHistoryButton'onClick={showOrderHistory}>Покажи историята</Button> 
                            </div>
                            <div className='historyIndexes'>
                                <p className='productIndex'><strong>Продукт</strong></p>
                                <p className='productQuantity'><strong>Количество</strong></p>
                                <p className='productPrice'><strong>Цена</strong></p>
                                <p className='productOrderStatus'><strong>Статус на поръчка</strong></p>


                            </div>
                            {orderHistory.map(order=>
                                
                                <div className='ordersBox'>
                                    <div className='orderProduct'>{order.products}</div>
                                    <div className='orderQuantity'>{order.quantity}</div>
                                    <div className='orderPrice'>{order.price} лв.</div>
                                    <div className='orderStatus'>{order.orderStatus}</div>


                                </div>)}
                        </div>
            </div>
        </div>

            <Footer/>
        </div>
    )
    
}


}

const mapStateToProps=(state={orderHistory: [{}] })=>{
    return{
        orderHistory: state.orderHistory
    }
}

export default connect(mapStateToProps)(ProfilePage)
