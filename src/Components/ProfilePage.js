import React, {useState, useEffect, Component} from 'react'
import './css/login.css'
import Navbar from './Header'
import Footer from './Footer'
import {connect} from 'react-redux'
import {FormControl, Button, Alert} from 'react-bootstrap'
import {FaCog, FaTrash, FaWrench, FaPaperPlane} from 'react-icons/fa'
import Axios from 'axios'
import $ from 'jquery'
import './css/profilepage.css'


export default function ProfilePage() {
    let cookieUsername = document.cookie;
    console.log('profile cookie', cookieUsername)
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
                                <span className='freeSpace'>..</span>

                                <FaTrash size={20}/>
                                <strong>  Изтрий профила си 
                                </strong>
                                <span className='freeSpace'>...</span>
                            </span>
                        </Button>
                        


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


