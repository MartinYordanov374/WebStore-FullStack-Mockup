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
            summary: "Използваме личните ви данни, както е обяснено в тази политика за поверителността. Без значение къде сте, къде живеете или какво гражданство имате, ние предлагаме еднаквия висок стандарт на сигурност на поверителността за всички наши потребители около света, без значение от страната на произход или местонахождение. Разбира се, краткото обощение тук няма да ви каже всичко, така че продължете да четете за повече детайли            "
        },
        {
            name: 'dataWeCollect',
            summary: "Събираме информация за нашите потребители, като: ",
            firstInfo: "Телефонните номера, които ни предоставяте",
            secondInfo: "Имейл адресите, които ни предоставяте",
            thirdInfo: "Имена и адреси, които ни предоставяте",
            fourthInfo: "Всякакви поръчки, които правите през нашия уебсайт",
            fifthInfo: "Състоянието на поръчките, които са направени през нашия уебсайт(направена, в куриер, доставена)",
            sixthInfo: "Също така, автоматично създаваме бисквитки на вашия браузър, които ви запазват логнати и пазят продуктите ви в кошницата."



        },
        {
            name: 'whyDoWeCollectYourData',
            summary: "Събираме данните ви, за да подобрим вашето преживяване в нашия магазин и за да подобрим функционалността на уебсайа ни."
        },
        {
            name: 'howDoWeUseYourData',
            summary: 'Използваме данните, които ни предоставяте с цел да: ',
            pointOne: 'Обработим и завършим поръчките ви',
            pointTwo: 'Ви изпращаме имейли относно поръчките ви и известия за промоции',
            pointThree: 'Ви държим в течение относно поръчките ви',
            pointFour: "Подобрим нашия сайт и неговата функционалност",

        },
        {
            name: 'cookiesAndTrackers',
            summary: "Както е обяснено по-долу, ние автоматично събираме информация от бисквитки(като ID на бисквитките и настройки),за да останете логнати, за да може сайтът да запомни предпочитанията ви, да ви идентифицира, както и вашето устройство и да анализираме употребата ви на нашите услуги."
            
        },
        {
            name: 'whoWeShareYourDataWith',
            summary: 'Споделяме данните ви с нашите доставчици на услуги - Куриерските ни услуги и хостинг платформата, която използваме.'
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
                            <p><strong>Обобщение на политиката за поверителността</strong></p>
                        </div>

                        <div className='privacySummary'>
                            {policies.map(policy=>
                            <div >
                                <p>{policy.name === $('.privacySummary').attr('class') ? policy.summary : ""}</p>

                            </div>)}
                        </div>  
                        <div className='showSummaryContainer'>
                        <IoMdArrowDropdownCircle size={25} onClick={()=>showCookiesInformation()}/>
                            <p><strong>Бисквитки и тракери</strong></p>
                        </div>

                        <div className='cookiesAndTrackers'>
                            {policies.map(policy=>
                            <div>
                                <p>{policy.name===$('.cookiesAndTrackers').attr('class') ? policy.summary : ""}</p>
                            </div>)}
                            
                        </div>
                        <div className='showSummaryContainer'>
                            <IoMdArrowDropdownCircle size={25} onClick={()=>showCustomersInformation()}/>
                            <p><strong>Какви данни събираме?</strong></p>
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
                            <p><strong>Защо събираме данните ви?</strong></p>
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
                            <p><strong>С кого споделяме данните ви?</strong></p>
                        </div>
                        <div className='whoWeShareYourDataWith'>
                            {policies.map(policy=>
                            <div>
                            
                                {policy.name === $('.whoWeShareYourDataWith').attr('class') ? policy.summary : ""}
                            </div>)}

                        </div>
                        <div className='showSummaryContainer'>
                            <IoMdArrowDropdownCircle size={25} onClick={()=>showDataUsageInformation()}/>
                            <p><strong>За какво изпозлваме данните ви?</strong></p>
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
