import React from 'react'
import './css/Footer.css'
import {FaInstagram, FaFacebook} from 'react-icons/fa'
export default function Footer() {
    return (
        <div className='footerWrapper'>
            <div className='row'>
                <div className='footerAbout col-sm-6 col-lg-6 col-xs-6'>
                    <p className='footerText'>About Aurora</p>
                    <p className='footerText'>This is a dropshipping website I've created as a side-hobby of mine</p>
                </div>
                <div className='footerLinks col-sm-6 col-lg-6 col-xs-6'>
                    <p className='footerText'>Links</p>
                    <p className='footerInstagramLink'><FaInstagram className='instagramIcon' size={40}></FaInstagram> Our Instagram</p>
                    <p className='footerFacebookLink'><FaFacebook className='facebookIcon'size={40}></FaFacebook> Our Facebook</p>

                </div>
            </div>
        </div>
    )
}
