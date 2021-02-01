import React, {useState, useEffect} from 'react'
import './css/login.css'
import Navbar from './Header'
import Footer from './Footer'
import {FormControl, Button, Alert} from 'react-bootstrap'
import {AiOutlineLogin} from 'react-icons/ai'
import {Redirect} from 'react-router-dom'
import Axios from 'axios'
import $ from 'jquery'
export default function Login() {
    const [userLog, setUserLog] = useState('')
    const [passLog, setPassLog] = useState('')
    let isLoggedIn = document.cookie;
    useEffect(()=>{
        $('.alert-success').fadeOut()
        $('.alert-danger').fadeOut()
        $('.alert-warning').fadeOut()
    },[])

    const login=()=>{
        
        Axios.post('http://localhost:3307/login',{
                usernameLogin: userLog,
                passwordLogin: passLog
            }).then((response)=>{
                console.log(response)
                if(response.data.message=="User doesnt exist")
                {
                    showUserNotFoundAlert()
                    
                }
                else if(response.data.message=="Wrong username/password combo")
                {
                    showWrongPassAlert()
                }
                else{
                    showUserFoundAlert()
                    $('.usernameField').text(response.data[0].username)
                    createCookie(response.data[0].username)
                    window.location='/profilepage'

                }
            })
    }
    const createCookie=(username)=>{
        let date = new Date()
        let hours = 1
        date.setTime(date.getTime()+(hours*60*60*1000))
        document.cookie=`${username}; expires=${date.toUTCString()}; path=./ProfilePage`

    }


    const showUserNotFoundAlert=()=>{
            $('.alert-danger').css('opacity', 1)
            $('.alert-danger').fadeIn()
            hideAlertSuccess()
            hideWrongPassAlert()
        }
    const showUserFoundAlert=()=>{
            $('.alert-success').css('opacity', 1)
            $('.alert-success').fadeIn()
            hideAlertFail()
            hideWrongPassAlert()
    }
    const hideAlertFail=()=>{
            $('.alert-danger').fadeOut()
        }
    const hideAlertSuccess=()=>{
            $('.alert-success').fadeOut()
        }
    const showWrongPassAlert=()=>{
        $('.alert-warning').css('opacity', 1)
        $('.alert-warning').fadeIn()
        hideAlertFail()
        hideAlertSuccess()
    }
    const hideWrongPassAlert=()=>{
        $('.alert-warning').fadeOut()

    }
    return (
        <div className='loginFormWrapper'>
            <Navbar/>
            <div className='loginForm'>
                {isLoggedIn.length>3 
                ?
                <Redirect to='./profilepage'></Redirect>
                :                            
                <div>
                <h2>Вход</h2>
                <Alert className='alert-danger' onClick={hideAlertFail}> <strong> Изглежда този потребител не съществува. </strong></Alert>

                <Alert className='alert-success' onClick={hideAlertSuccess}> <strong> Успешно влязохте в профила си, <span className='usernameField'/>! </strong></Alert>
                <Alert className='alert-warning' onClick={hideWrongPassAlert}> <strong>Грешно име или парола! </strong></Alert>

                <FormControl className='enterUsername' onChange={(e)=>setUserLog(e.target.value)} placeholder='Въведете никнейм или имейл'/>
                {/* <FormControl className='enterEmail' onChange={(e)=>setEmailLog(e.target.value)} placeholder='Въведете имейл адрес'/> */}
                <FormControl className='enterPassword'  onChange = {(e)=>setPassLog(e.target.value)} type='password' placeholder='Въведете парола'/>
                <Button className='submitLoginForm' onClick ={login}> <strong><AiOutlineLogin size={20}/> Влезте в профила си</strong> </Button>
                <br></br>
                <br></br>
                <a href='/register'>Нямате профил? Регистрирайте се, безплатно тук!</a>
                </div>
                }
            </div>
            <Footer/>
        </div>
    )
}
