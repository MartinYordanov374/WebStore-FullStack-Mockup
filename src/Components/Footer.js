import React from 'react'
import './css/Footer.css'
import {FaInstagram, FaFacebook} from 'react-icons/fa'
export default function Footer() {
    return (
        <div className='footerWrapper'>
            <div className='row'>
                <div className='footerAbout col-sm-6 col-lg-6 col-xs-6'>
                    <p className='footerText'>За нас</p>
                    <p className='footerText'><strong>Neon</strong> е сайт за дрехи и аксесоари за всички възрасти. Ние вярваме, че забавните дрехи и аксесоари са за всички и това е нашата цел. При нас може да закупите забавни маски и худита.</p>
                </div>
                <div className='footerLinks col-sm-6 col-lg-6 col-xs-6'>
                    <p className='footerText'>Връзки</p>
                    <p className='footerInstagramLink'><FaInstagram className='instagramIcon' size={40}></FaInstagram> <a className='socialMediaLink' href='https://www.instagram.com'>Последвайте ни в Инстаграм</a>  </p>
                    <p className='footerFacebookLink'><FaFacebook className='facebookIcon'size={40}></FaFacebook> <a className='socialMediaLink' href='https://wwww.facebook.com'>Последвайте ни във Фейсбук</a> </p>

                </div>
            </div>
        </div>
    )
}
