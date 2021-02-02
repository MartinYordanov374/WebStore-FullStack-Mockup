import React, {useState, useEffect} from 'react'
import './css/login.css'
import Navbar from './Header'
import Footer from './Footer'
import {FormControl, Button, Alert} from 'react-bootstrap'
import {FaRegUser, FaKey} from 'react-icons/fa'
import Axios from 'axios'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import $ from 'jquery'

export default function Register() {
    const [userReg, setUserReg] = useState('')
    const [passReg, setPassReg] = useState('')
    const [emailReg, setEmailReg] = useState('')
    let isLoggedIn = document.cookie;
    useEffect(()=>{
        hideAlerts()
    },[])
    const sendEmail=(email)=>{
        console.log(email)
    }
    const register=()=>{
            let pattern = '[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+'
            let checkEmailRegex = RegExp(pattern)
            let isEmailValid = checkEmailRegex.test(emailReg);
            if(userReg.length>3 && passReg.length>8 && isEmailValid)
            {
                Axios.post('http://localhost:3307/register',{
                         username: userReg,
                         password: passReg,
                         email: emailReg
                     }).then((response)=>{
                         if(response.data.message==='user already registered'){
                            showAlertTaken()
                            
                         }
                         else{
                            showAlertSuccess()
                            window.location='/login'
                        }

                })
               

            }
            else
            {
                showAlertFail()
            }
    }

    const hideAlerts=()=>{
        $('.alert-success').fadeOut()
        $('.alert-danger').fadeOut()
        $('.alert-warning').fadeOut()

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
    const showAlertTaken=()=>{
        $('.alert-warning').css('opacity', 1)
        $('.alert-warning').fadeIn()
        hideAlertSuccess()
        hideAlertFail()
    }
    const hideAlertTaken=()=>{
        $('.alert-warning').fadeOut()
        hideAlertSuccess()
        hideAlertFail()
    }
    return (
        <div className='loginFormWrapper'>
            <Navbar/>
            <div className='loginForm'>
                {isLoggedIn.length>3 
                ?
                <Redirect to='/profilepage'></Redirect>

                :
                <div>
                <h2>Регистрация</h2>
                <Alert className='alert-success' onClick={hideAlertSuccess}> <strong>Регистрацията е успешна!</strong></Alert>
                <Alert className='alert-danger' onClick={hideAlertFail}> <strong> Въвели сте невалидно име,парола или имейл адрес !</strong></Alert>
                <Alert className='alert-warning' onClick={hideAlertTaken}> <strong>Този потребител вече съществува!</strong></Alert>
                <FormControl className='enterUsername' onChange={(e)=>setUserReg(e.target.value)} placeholder='Въведете никнейм'/>
                <FormControl className='enterEmail' onChange={(e)=>setEmailReg(e.target.value)} placeholder='Въведете имейл'/>

                <FormControl className='enterPassword'  onChange = {(e)=>setPassReg(e.target.value)} type='password' placeholder='Въведете парола'/>
                
                

                <Button className='submitLoginForm' onClick ={register}><FaKey/> Завърши регистрацията си </Button>
                <br></br>
                <br></br>
                <a href='/login'>Вече имате профил? Влезте от тук.</a>
                
                <p className='agreementAlert'>
                    Със завършването на регистрацията, Вие се съгласявате с нашата 
                    <a href='/privacyPolicy'> политика за поверителността</a> и 
                    <a href='/termsOfUse'> условия за ползване</a>
                </p>
                </div>
                }
                

            </div>
            <Footer/>
        </div>
    )
}
