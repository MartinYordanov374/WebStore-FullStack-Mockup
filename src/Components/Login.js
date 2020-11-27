import React from 'react'
import './css/login.css'
import Navbar from './Header'
import Footer from './Footer'
import {FormControl, Button} from 'react-bootstrap'
import {FaRegUser} from 'react-icons/fa'
export default function Login() {
    return (
        <div className='loginFormWrapper'>
            <Navbar/>
            <div className='loginForm'>
                <p className='createSpace'>.</p>
                <FormControl className='enterUsername' placeholder='Въведете никнейм'/>
                <FormControl className='enterEmail'  placeholder='Въведете имейл адрес'/>
                <FormControl className='enterPassword'  placeholder='Въведете парола'/>
                <Button className='submitLoginForm'><FaRegUser/> Влез</Button>
                <p className='createSpace'>.</p>

            </div>
            <Footer/>
        </div>
    )
}
