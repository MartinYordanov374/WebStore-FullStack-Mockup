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

    const login=()=>{
        Axios.post('http://localhost:3307/login',{
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
                <h2>Вход</h2>
                <FormControl className='enterUsername' onChange={(e)=>setUserReg(e.target.value)} placeholder='Въведете никнейм'/>
                <FormControl className='enterPassword'  onChange = {(e)=>setPassReg(e.target.value)} type='password' placeholder='Въведете парола'/>
                <Button className='submitLoginForm' onClick ={login}><FaRegUser/> Влезте в профила си </Button>
                <br></br>
                <br></br>
                <a href='/register'>Нямате профил? Регистрирайте се тук!</a>


            </div>
            <Footer/>
        </div>
    )
}
