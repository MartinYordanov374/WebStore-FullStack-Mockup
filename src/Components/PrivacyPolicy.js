import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import $ from 'jquery'
import {BsDot} from 'react-icons/bs'
import {IoMdArrowDropdownCircle, IoMdArrowDropupCircle} from 'react-icons/io'
import './css/privacyPolicy.css'
import {Button} from 'react-bootstrap'
function PrivacyPolicy() {
    const policies=[
        {
            name: 'privacySummary',
            title: 'Summary',
            summary: "We use your personal information as this Privacy Statement describes. No matter where you are, where you live, or what your citizenship is, we provide the same high standard of privacy protection to all our users around the world, regardless of their country of origin or location.Of course, the short version and the Summary below don't tell you everything, so please read on for more details."
        },
        {
            name: 'dataWeCollect',
            summary: "We collect various information about our customers, such as:",
            firstInfo: "Telephone numbers that you've provided us with",
            secondInfo: "Email addresses that you've provided us with",
            thirdInfo: "Names and addresses you've provided us with",
            fourthInfo: "Any orders that you make throguh our website",
            fifthInfo: "The state of the orders through our website",
            sixthInfo: "Additionally we also automatically create cookies on your browser that keep you logged in and keep products in your cart, so that when you come back to our website, everything remains as you've left it"



        },
        {
            name: 'whyDoWeCollectYourData',
            summary: "We collect your data in order to improve our website functionality and your overall experience on our website."
        },
        {
            name: 'howDoWeUseYourData',
            summary: 'We use the data you provide us with in order to: ',
            pointOne: 'Process and accomplish your orders',
            pointTwo: 'Send you e-mails about our offers and promotions',
            pointThree: 'Keep you informed regarding your orders',
            pointFour: "Improve our website and it's functionality",

        },
        {
            name: 'cookiesAndTrackers',
            summary: "As further described below, we automatically collect information from cookies (such as cookie ID and settings) to keep you logged in, to remember your preferences, to identify you and your device and to analyze your use of our service."
            
        },
        {
            name: 'whoWeShareYourDataWith',
            summary: 'We share your data with our service providers - the courier services and the hosting platform we use.'
        }

    ]
    const [setState, state] = useState()
    const showSummary=()=>{
        $('.privacySummary').toggle("slow")
        console.log(state)
    }
    const showCustomersInformation=()=>{
        $('.dataWeCollect').toggle("slow")
    }
    const showDataCollectionInformation=()=>{
        $('.whyDoWeCollectYourData').toggle("slow")

    }
    const showDataSharingInformation=()=>{
        $('.whoWeShareYourDataWith').toggle("slow")
    }
    const showDataUsageInformation=()=>{
        $('.howDoWeUseYourData').toggle("slow")

    }
    const showCookiesInformation=()=>{
        $('.cookiesAndTrackers').toggle("slow")

    }
    return (
        <div>
            <div className='privacyPolicyContainer'>
                <Header/>
                    <div className='privacyPolicyWrapper'>
                        <div className='showSummaryContainer'>
                            <IoMdArrowDropdownCircle className='showDiv' size={25} onClick={()=>showSummary()}/>
                            <p><strong>Privacy Policy Summary</strong></p>
                        </div>

                        <div className='privacySummary'>
                            {policies.map(policy=>
                            <div >
                                <p>{policy.name === $('.privacySummary').attr('class') ? policy.summary : ""}</p>

                            </div>)}
                        </div>  
                        <div className='showSummaryContainer'>
                        <IoMdArrowDropdownCircle size={25} onClick={()=>showCookiesInformation()}/>
                            <p><strong>Cookies and Trackers</strong></p>
                        </div>

                        <div className='cookiesAndTrackers'>
                            {policies.map(policy=>
                            <div>
                                <p>{policy.name===$('.cookiesAndTrackers').attr('class') ? policy.summary : ""}</p>
                            </div>)}
                            
                        </div>
                        <div className='showSummaryContainer'>
                            <IoMdArrowDropdownCircle size={25} onClick={()=>showCustomersInformation()}/>
                            <p><strong>What data do we collect?</strong></p>
                        </div>
                        <div className='dataWeCollect'>
                            {policies.map(policy=>
                            <div>
                                <p><strong>{policy.name === $('.dataWeCollect').attr('class') ? policy.summary : ""}</strong></p>
                            </div>)}
                            {policies.map(policy=>
                            <div>
                                <p>{policy.firstInfo}</p>
                                <p>{policy.secondInfo}</p>
                                <p>{policy.thirdInfo}</p>
                                <p>{policy.fourthInfo}</p>
                                <p>{policy.fifthInfo}</p>
                                <p>{policy.sixthInfo}</p>

                            </div>)}
                        </div>
                        <div className='showSummaryContainer'>
                            <IoMdArrowDropdownCircle size={25} onClick={()=>showDataCollectionInformation()}/>
                            <p><strong>Why do we collect your data?</strong></p>
                        </div>
                        <div className='whyDoWeCollectYourData'>
                            {policies.map(policy=>
                            <div>
                                <p><strong>{policy.name === $('.whyDoWeCollectYourData').attr('class') ? policy.title : ""}</strong></p>
                                <p>{policy.name === $('.whyDoWeCollectYourData').attr('class') ? policy.summary : ""}</p>

                            </div>)}
                        </div>
                        <div className='showSummaryContainer'>
                            <IoMdArrowDropdownCircle size={25} onClick={()=>showDataSharingInformation()}/>
                            <p><strong>Who we share your data with?</strong></p>
                        </div>
                        <div className='whoWeShareYourDataWith'>
                            {policies.map(policy=>
                            <div>
                            
                                {policy.name === $('.whoWeShareYourDataWith').attr('class') ? policy.summary : ""}
                            </div>)}

                        </div>
                        <div className='showSummaryContainer'>
                            <IoMdArrowDropdownCircle size={25} onClick={()=>showDataUsageInformation()}/>
                            <p><strong>What do we use your data for?</strong></p>
                        </div>
                       
                        <div className='howDoWeUseYourData'>
                            {policies.map(policy=>
                            <div>
                            <p><strong>{policy.name === $('.howDoWeUseYourData').attr('class') ? policy.summary : ""} </strong></p>

                            </div>)}
                            <div>
                                    {policies.map(policy=>
                                    <div className='pointOne' >
                                        <p>{policy.pointOne}</p> 
                                        <p>{policy.pointTwo}</p> 
                                        <p>{policy.pointThree}</p> 
                                        <p>{policy.pointFour}</p> 
                                    </div>
                                    )}
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}

export default PrivacyPolicy
