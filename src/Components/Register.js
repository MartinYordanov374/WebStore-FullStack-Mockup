import React, {useState, useEffect} from 'react'
import './css/login.css'
import Navbar from './Header'
import Footer from './Footer'
import {FormControl, Button, Alert} from 'react-bootstrap'
import {FaRegUser, FaKey} from 'react-icons/fa'
import Axios from 'axios'
import $ from 'jquery'

export default function Register() {
    const [userReg, setUserReg] = useState('')
    const [passReg, setPassReg] = useState('')

    useEffect(()=>{
        hideAlerts()
    },[])
    const register=()=>{
            if($('.enterPassword').val().length>8 && $('.enterUsername').val().length>3)
            {
                Axios.post('http://localhost:3307/register',{
                         username: userReg,
                         password: passReg
                     }).then((response)=>{
                         console.log(response)
                })
                showAlertSuccess()
            }
            else
            {
                showAlertFail()
            }
    }

    const hideAlerts=()=>{
        $('.alert-success').fadeOut()
        $('.alert-danger').fadeOut()

    }
    const hideAlertSuccess=()=>{
        $('.alert-success').fadeOut()
    }
    const showAlertSuccess=()=>{
        $('.alert-success').css('opacity', 1)
        $('.alert-success').fadeIn()
        hideAlertFail()

    }
    const hideAlertFail=()=>{
        $('.alert-danger').fadeOut()
    }
    const showAlertFail=()=>{
        $('.alert-danger').css('opacity', 1)
        $('.alert-danger').fadeIn()
        hideAlertSuccess()

    }
    return (
        <div className='loginFormWrapper'>
            <Navbar/>
            <div className='loginForm'>
                <h2>Регистрация</h2>
                <Alert className='alert-success' onClick={hideAlertSuccess}> <strong>Регистрацията е успешна!</strong></Alert>
                <Alert className='alert-danger' onClick={hideAlertFail}> <strong> Въвели сте невалидно име или парола !</strong></Alert>

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
