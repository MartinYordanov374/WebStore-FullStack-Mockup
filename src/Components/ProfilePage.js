import React, {useState, useEffect} from 'react'
import './css/login.css'
import Navbar from './Header'
import Footer from './Footer'
import {FormControl, Button, Alert} from 'react-bootstrap'
import {FaRegUser} from 'react-icons/fa'
import Axios from 'axios'
import $ from 'jquery'


export default function ProfilePage() {
    let cookieUsername = document.cookie;
    return (
        <div className='profileWrapper'>
            <Navbar/>
            <p>Добре Дошъл, {cookieUsername} </p>
            <hr></hr> 
            <Footer/>
        </div>
    )
}
