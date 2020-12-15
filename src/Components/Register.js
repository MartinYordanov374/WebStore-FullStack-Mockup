import React, {useState} from 'react'
import './css/login.css'
import Navbar from './Header'
import Footer from './Footer'
import {FormControl, Button} from 'react-bootstrap'
import {FaRegUser, FaKey} from 'react-icons/fa'
import Axios from 'axios'
import $ from 'jquery'

export default function Register() {
    const [userReg, setUserReg] = useState('')
    const [passReg, setPassReg] = useState('')

    const register=()=>{
        	Axios.post('http://localhost:3307/register',{
                username: userReg,
                password: passReg
            }).then((response)=>{
                console.log(response)
            })
    }
    return (
        <div className='loginFormWrapper'>
            <Navbar/>
            <div className='loginForm'>
                <h2>Регистрация</h2>
                <FormControl className='enterUsername' onChange={(e)=>setUserReg(e.target.value)} placeholder='Въведете никнейм'/>
                <FormControl className='enterPassword'  onChange = {(e)=>setPassReg(e.target.value)} type='password' placeholder='Въведете парола'/>
                <Button className='submitLoginForm' onClick ={register}><FaKey/> Завърши регистрация </Button>
                <br></br>
                <br></br>
                <a href='/login'>Вече имате профил? Влезте тук.</a>

            </div>
            <Footer/>
        </div>
    )
}
