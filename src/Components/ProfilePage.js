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
    componentDidMount(){
        console.log('updated order history')
    }
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
                                    response.data.message[i].price})
                         }
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
                <p className='profileGreeting'>
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
                    </p>
                    <hr className='borderLine'></hr>

                    <div className='dashboard'>
                         <div className='options'>

                        <span className='optionsTitle'><strong><FaCog size={25}/> Настройки</strong>
                            </span>
                        <hr className='borderLine'></hr>

                        {cookieUsername.length>0?
                        <div>

                        <Button className='btn-info' onClick={logout}>
                        
                        <span className='logOutButton'>
                                <span className='freeSpace'>.</span>
                                <AiOutlineLogout size={20}/>
                                <strong> Излез от профила си</strong>
                                <span className='freeSpace'>...</span>
                        </span>
                        </Button>
                        <br></br>
                        <br></br>
                        <Button className='btn-warning' onClick={changePass}>
                            <span className='changePassButton'>
                                <FaWrench size={20}/>
                                <strong> Промени паролата си </strong>
                            </span>
                        </Button>
                        <br></br>
                        <br></br>
                        <Button className='btn-danger' onClick={deleteProfile}>
                            <span className='deleteAccButton'>

                                <span className='freeSpace'>.</span>
                                <FaTrash size={20}/>
                                <strong>  Изтрий профила си
                                </strong>
                                <span className='freeSpace'>...</span>
                            </span>
                        </Button>
                        </div>
                        :
                       ""}


                    </div>
                        <div className='orderHistory'>
                            <span className='orderHistoryTitle'>
                                <FaPaperPlane size={20}/> <strong>История на поръчките</strong>
                            </span>
                            <hr className='borderLine'></hr>
                            
                            <Button className='clearHistoryButton' onClick={clearOrderHistory}>Скрий историята</Button>
                            <Button className='showHistoryButton'onClick={showOrderHistory}>Покажи историята</Button> 

                            <div className='historyIndexes'>
                                <p className='productIndex'>Продукт</p>
                                <p className='productQuantity'>Количество</p>
                                <p className='productPrice'>Цена</p>
                            </div>
                            
                            {orderHistory.map(order=>
                                
                                <div className='ordersBox'>
                                    <div className='orderInfo'>{order.products}</div>
                                    <div className='orderInfo'>{order.quantity}</div>
                                    <div className='orderInfo'>{order.price} лв.</div>
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
