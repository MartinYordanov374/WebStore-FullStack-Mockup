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
                    <p className='footerTextSubscribe'>Абонирайте се, за да получавате първи най-новите ни оферти</p>
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
                    <p className='footerTitleAbout'>Ефикасност</p>
                    <p className='footerTextAbout'>Neon е онлайн магазин за дрехи в корените, на който дълбоко лежи ефикасността и доставките на време, за вас - нашите клиенти!</p>

                </div>
                <div className='footerNavigation col-sm-4 col-lg-4 col-xs-4'>
                    <p className='footerTitleNavigation'>Навигация</p>
                    <div className='footerNavigationTab '>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Masks'>Маски <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Hoodies'>Худита <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Login'>Влез <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Register'>Регистрация <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Cart'>Кошница <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Wishlist'>Любими <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Contact'>Контакт <RiArrowDropRightLine/></a>
                        </div>
                        <div className='footerNavigationLinkContainer col-sm-2 col-lg-2 col-xs-2'>
                            <a className='footerNavigationLink' href='/Promotions'>Промоции <RiArrowDropRightLine/></a>
                        </div>

                    </div>

                </div>
            </div>
            <div className='footerMore col-sm-12 col-lg-12 col-xs-12'>
                
                    <p className='footerMoreText'> Example Address that I will update once the project is finished </p>
            </div>
            <div className='privacyDetails'>
                <div className='privacyPolicy'>
                    <p><a href='/privacyPolicy' className='privacyPolicyLink'>Поверителност</a></p>
                </div>
                <div className='termsOfUse'>
                    <p ><a href='/privacyPolicy' className='termsOfUseLink'>Условия за ползване</a></p>
                </div>
            </div>
        </div>
    )
}