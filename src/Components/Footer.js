import React from 'react'
import './css/Footer.css'
import {FaInstagram, FaFacebook} from 'react-icons/fa'
export default function Footer() {
    return (
        <div className='footerWrapper'>
            <div className='row'>
                <div className='footerAbout col-sm-6 col-lg-6 col-xs-6'>
                    <p className='footerText'>За нас</p>
                    <p className='footerText'>Аврора е сайт за дрехи и аксесоари за всички възрасти. Ние вярваме, че забавните дрехи и аксесоари са за всички и това е нашата цел. При нас може да закупите забавни маски и худита.</p>
                </div>
                <div className='footerLinks col-sm-6 col-lg-6 col-xs-6'>
                    <p className='footerText'>Връзки</p>
                    <p className='footerInstagramLink'><FaInstagram className='instagramIcon' size={40}></FaInstagram> Последвайте ни в Инстаграм</p>
                    <p className='footerFacebookLink'><FaFacebook className='facebookIcon'size={40}></FaFacebook> Последвайте ни във Фейсбук</p>

                </div>
            </div>
        </div>
    )
}
