import React from 'react'
import './css/Footer.css'
import {FaInstagram, FaFacebook} from 'react-icons/fa'
import {FormControl, InputGroup, Button} from 'react-bootstrap'
import {RiArrowDropRightLine} from 'react-icons/ri'
export default function Footer() {
    return (
        <div className='footerWrapper'>
            <div className='row'>
                <div className='footerSubscribe col-sm-4 col-lg-4 col-xs-4'>
                    <p className='footerTextSubscribe'>Абонирайте се, за да получавате първи най-новите ни оферти</p>
                        <InputGroup>
                            <FormControl className='subscribeNewsletterForm' placeholder='Имейл адрес'/>
                            <InputGroup.Append>
                                <Button className='subscribeNewsletterButton btn-warning'><strong>Абонирай се<RiArrowDropRightLine size={20}/></strong></Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <div className='socialMediaIcons'>
                            <FaInstagram className='instagramIcon' size={40}></FaInstagram>
                            <FaFacebook className='facebookIcon'size={40}></FaFacebook>
                        </div>
                </div>

                <div className='footerAbout col-sm-3 col-lg-3 col-xs-3'>
                    <p className='footerTitleAbout'>Ефикасност</p>
                    <p className='footerTextAbout'>Neon е онлайн магазин за дрехи в корените, на който дълбоко лежи ефикасността и доставките на време, за вас - нашите клиенти!</p>

                </div>
                <div className='footerNavigation col-sm-3 col-lg-3 col-xs-3'>
                    <p className='footerTitleNavigation'>Навигация</p>
                    <div className='footerNavigationTab'>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Hoodies'>Masks <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Masks'>Hoodies <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Masks'>Login <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Masks'>Register <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Masks'>Cart <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Masks'>Favorites <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Masks'>Offers <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Masks'>Contacts <RiArrowDropRightLine/></a>
                        </div>

                    </div>

                </div>
            </div>
            <div className='footerLinks col-sm-12 col-lg-12 col-xs-12'>
                    <p className='footerText'>Връзки</p>
                    <p className='footerInstagramLink'><FaInstagram className='instagramIcon' size={40}></FaInstagram> <a className='socialMediaLink' href='https://www.instagram.com'>Последвайте ни в Инстаграм</a>  </p>
                    <p className='footerFacebookLink'><FaFacebook className='facebookIcon'size={40}></FaFacebook> <a className='socialMediaLink' href='https://wwww.facebook.com'>Последвайте ни във Фейсбук</a> </p>

                </div>
        </div>
    )
}