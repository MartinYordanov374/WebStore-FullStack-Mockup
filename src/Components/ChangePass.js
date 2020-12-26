import React,{useState, useEffect} from 'react'
import {FormControl, Button, Alert} from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'
import $ from 'jquery'
import './css/ChangePass.css'
export default function ChangePass() {
    let isLoggedIn = document.cookie;

    const [newPass, setNewPass] = useState('')
    const [confirmNewPass, setConfirmNewPass] = useState('')

    useEffect(()=>{
        $('.passLengthAlert').fadeOut()
        $('.passSuccessAlert').fadeOut()
        $('.passMatchAlert').fadeOut()
    },[])
    const showAlertFail=()=>{
        $('.passLengthAlert').css('opacity', 1)

        $('.passLengthAlert').fadeIn()
    }
    const showAlertSuccess=()=>{
        $('.passSuccessAlert').css('opacity', 1)

        $('.passSuccessAlert').fadeIn()
    }
    const showAlertMatch=()=>{
        $('.passMatchAlert').css('opacity', 1)

        $('.passMatchAlert').fadeIn()
    }
    const hideAlertFail=()=>{
        $('.passLengthAlert').fadeOut()
    }
    const hideAlertSuccess=()=>{
        $('.passSuccessAlert').fadeOut()
    }
    const hideAlertMatch=()=>{
        $('.passMatchAlert').fadeOut()
    }
    
    const showPasswords=()=>{
        console.log('new pass: ', newPass)
        console.log('confirm new pass: ', confirmNewPass)
        if(newPass.length<=8)
        {
            showAlertFail()
            hideAlertSuccess()
            hideAlertMatch()
        }
        if(newPass!=confirmNewPass){
           showAlertMatch()
           hideAlertFail()
           hideAlertSuccess()
        }
        if(newPass==confirmNewPass && newPass.length>8){
            showAlertSuccess()
            hideAlertMatch()
            hideAlertFail()
        }

    }
    return (
        
        <div>
            <Header/>
                {isLoggedIn.length>0 
                ?
                <div className='loginForm'>
                <h2>Смяна на парола</h2>
                <br></br>
                <Alert className='alert-danger passLengthAlert' onClick={hideAlertFail}> <strong>Паролата трябва да е по-дълга от 8 символа</strong> </Alert>
                <Alert className='alert-danger passMatchAlert' onClick={hideAlertMatch}> <strong>Паролите не съвпадат</strong> </Alert>
                <Alert className='alert-success passSuccessAlert' onClick={hideAlertSuccess}> <strong>Успешно променихте паролата си</strong> </Alert>


                <FormControl className='enterPassword'  onChange = {(e)=>setNewPass(e.target.value)} type='password' placeholder='Въведете новата парола'/>
                <FormControl className='enterPassword'  onChange = {(e)=>setConfirmNewPass(e.target.value)} type='password' placeholder='Потвърдете новата парола'/>

                <Button className='submitLoginForm' onClick={showPasswords}> <strong>Смени паролата си</strong> </Button>
                <br></br>
                <br></br>
                <br></br>

            </div>
                :
                <h1>You must be logged in</h1>}
            <Footer/>
        </div>
    )
}
