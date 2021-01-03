import React from 'react'
import './css/Footer.css'
import {FaFacebook, FaTwitterSquare, FaInstagram} from 'react-icons/fa'
import {FormControl, InputGroup, Button} from 'react-bootstrap'
import {RiArrowDropRightLine} from 'react-icons/ri'
export default function Footer() {
    return (
        <div className='footerWrapper'>
            <div className='row'>
                <div className='footerSubscribe col-sm-4 col-lg-4 col-xs-4'>
                    <p className='footerTextSubscribe'><strong>Абонирайте се, за да получавате първи най-новите ни оферти</strong></p>
                        <InputGroup>
                            <FormControl className='subscribeNewsletterForm' placeholder='Имейл адрес'/>
                            <InputGroup.Append>
                                <Button className='subscribeNewsletterButton btn-warning'><strong>Абонирай се<RiArrowDropRightLine size={20}/></strong></Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <div className='socialMediaIcons'>
                            <FaInstagram className='instagramIcon' size={44.5}></FaInstagram>
                            <FaFacebook className='facebookIcon'size={44.5}></FaFacebook>

                        </div>
                </div>

                <div className='footerAbout col-sm-3 col-lg-3 col-xs-3'>
                    <p className='footerTitleAbout'><strong>Ефикасност</strong></p>
                    <p className='footerTextAbout'><strong>Neon е онлайн магазин за дрехи в корените, на който дълбоко лежи ефикасността и доставките на време, за вас - нашите клиенти!</strong></p>

                </div>
                <div className='footerNavigation col-sm-3 col-lg-3 col-xs-3'>
                    <p className='footerTitleNavigation'><strong>Навигация</strong></p>
                    <div className='footerNavigationTab '>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Masks'><strong>Маски</strong> <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Hoodies'><strong>Худита</strong> <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Login'><strong>Влез</strong> <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Register'><strong>Регистрация</strong> <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Cart'><strong>Кошница</strong> <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Wishlist'><strong>Любими</strong> <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Contact'><strong>Контакт</strong> <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Promotions'><strong>Промоции</strong> <RiArrowDropRightLine/></a>
                        </div>

                    </div>

                </div>
            </div>
            <div className='footerMore col-sm-12 col-lg-12 col-xs-12'>
                
                    <p className='footerMoreText'> <strong>Example Address that I will update once the project is finished</strong> </p>
            </div>
            <div className='privacyDetails'>
                <div className='privacyPolicy'>
                    <p><a href='/privacyPolicy' className='privacyPolicyLink'><strong>Поверителност</strong></a></p>
                </div>
                <div className='termsOfUse'>
                    <p ><a href='/privacyPolicy' className='termsOfUseLink'><strong>Условия за ползване</strong></a></p>
                </div>
            </div>
        </div>
    )
}