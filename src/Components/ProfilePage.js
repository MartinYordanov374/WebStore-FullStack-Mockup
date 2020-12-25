import React, {useState, useEffect, Component} from 'react'
import './css/login.css'
import Navbar from './Header'
import Footer from './Footer'
import {connect} from 'react-redux'
import {FormControl, Button, Alert} from 'react-bootstrap'
import {FaCog, FaTrash, FaWrench, FaPaperPlane} from 'react-icons/fa'
import {AiOutlineLogout} from 'react-icons/ai'

import Axios from 'axios'
import $ from 'jquery'
import './css/profilepage.css'
import {BrowserRouter as Router, Redirect, Link} from 'react-router-dom'


export default function ProfilePage() {
    let cookieUsername = document.cookie;
    console.log('profile cookie', cookieUsername)
    const logout=()=>{
        document.cookie=`${cookieUsername}; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
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
    return (
        <div className='profilePageWrapper'>
            <Navbar/>
            <div className='profileWrapper'>
                <p className='profileGreeting'>
                    {cookieUsername==0
                    ?
                        <span className='notRegisteredAlert'>
                            <strong>
                                Изглежда не сте влезли в профила си
                            </strong>
                        </span>

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
                        <Button className='btn-warning'> 
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
                        <div className='inactiveButtons'>
                        <Button className='btn-info'>
                        <span className='logOutButton'>
                                <span className='freeSpace'>.</span>
                                <AiOutlineLogout size={20}/> 
                                <strong> Излез от профила си</strong>
                                <span className='freeSpace'>...</span>
                        </span>
                        </Button>
                        <br></br>
                        <br></br>
                        <Button className='btn-warning'> 
                            <span className='changePassButton'>
                                <FaWrench size={20}/>
                                <strong> Промени паролата си </strong>
                            </span>
                        </Button>
                        <br></br>
                        <br></br>
                        <Button className='btn-danger'>
                            <span className='deleteAccButton'>

                                <span className='freeSpace'>.</span>
                                <FaTrash size={20}/>   
                                <strong>  Изтрий профила си 
                                </strong>
                                <span className='freeSpace'>...</span>
                            </span>
                        </Button>
                        </div>}



                    </div>
                        <div className='orderHistory'>
                            <span className='orderHistoryTitle'>
                                <FaPaperPlane size={20}/> <strong>История на поръчките</strong>
                            </span>
                            <hr className='borderLine'></hr>
                            {}
                        </div>
            </div>
        </div>

            <Footer/>
        </div>
    )
}


