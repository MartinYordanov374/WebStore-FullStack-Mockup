import React, {useState} from 'react'
import './css/login.css'
import Navbar from './Header'
import Footer from './Footer'
import {FormControl, Button} from 'react-bootstrap'
import {FaRegUser} from 'react-icons/fa'
import Axios from 'axios'
import $ from 'jquery'

export default function Login() {
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
                <p className='createSpace'>.</p>
                <FormControl className='enterUsername' onChange={(e)=>setUserReg(e.target.value)} placeholder='Въведете никнейм'/>
                <FormControl className='enterPassword'  onChange = {(e)=>setPassReg(e.target.value)} type='password' placeholder='Въведете парола'/>
                <Button className='submitLoginForm' onClick ={register}><FaRegUser/> Завърши регистрация </Button>
                <p className='createSpace'>.</p>

            </div>
            <Footer/>
        </div>
    )
}
