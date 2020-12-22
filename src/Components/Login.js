import React, {useState, useEffect} from 'react'
import './css/login.css'
import Navbar from './Header'
import Footer from './Footer'
import {FormControl, Button, Alert} from 'react-bootstrap'
import {FaRegUser} from 'react-icons/fa'
import Axios from 'axios'
import $ from 'jquery'

export default function Login() {
    const [userLog, setUserLog] = useState('')
    const [passLog, setPassLog] = useState('')

    useEffect(()=>{
        $('.alert-success').fadeOut()
        $('.alert-danger').fadeOut()
    },[])

    const login=()=>{
        Axios.post('http://localhost:3307/login',{
                usernameLogin: userLog,
                passwordLogin: passLog
            }).then((response)=>{
                console.log(response)
                if(response.data.message=="User doesnt exist" || response.data.message=="Wrong username/password combo")
                {
                    showUserNotFoundAlert()

                }
                else{
                    showUserFoundAlert()
                    $('.usernameField').text(response.data[0].username)
                    createCookie(response.data[0].username)
                }
            })
    }
    const createCookie=(username)=>{
        let date = new Date()
        let hour = 1
        date.setTime(date.getTime()+(hour*60*1000))
        document.cookie=`${username}; expires=${date.toUTCString()}; path=/ProfilePage`

    }
    const showUserNotFoundAlert=()=>{
            $('.alert-danger').css('opacity', 1)
            $('.alert-danger').fadeIn()
            hideAlertSuccess()
        }
    const showUserFoundAlert=()=>{
            $('.alert-success').css('opacity', 1)
            $('.alert-success').fadeIn()
            hideAlertFail()
    }
    const hideAlertFail=()=>{
            $('.alert-danger').fadeOut()
        }
    const hideAlertSuccess=()=>{
            $('.alert-success').fadeOut()
        }
    return (
        <div className='loginFormWrapper'>
            <Navbar/>
            <div className='loginForm'>
                <h2>Вход</h2>
                <Alert className='alert-danger' onClick={hideAlertFail}> <strong> Изглежда този потребител не съществува. </strong></Alert>
                <Alert className='alert-success' onClick={hideAlertSuccess}> <strong> Успешно влязохте в профила си, <span className='usernameField'/>! </strong></Alert>
                <FormControl className='enterUsername' onChange={(e)=>setUserLog(e.target.value)} placeholder='Въведете никнейм'/>
                <FormControl className='enterPassword'  onChange = {(e)=>setPassLog(e.target.value)} type='password' placeholder='Въведете парола'/>
                <Button className='submitLoginForm' onClick ={login}><FaRegUser/> Влезте в профила си </Button>
                <br></br>
                <br></br>
                <a href='/register'>Нямате профил? Регистрирайте се тук!</a>


            </div>
            <Footer/>
        </div>
    )
}
