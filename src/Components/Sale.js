import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './css/sale.css'
function Sale() {
    const promotions=[
        {
            promotionName: "Безплатни Доставки",
            promotionDuration: "Постоянна"
        },
        
        
    ]
    return (
        <div className='promotionsContainer'>
            <Header/>
            <h2 className='promotionsHeader'>Налични промоции</h2>
                {promotions.length>0
                    ?
                <div>
                    <div className='promotionsGuideWrapper'>
                        <hr></hr>
                                <p className='promotionNameGuide'>
                                    <strong>Промоция</strong>
                                </p>
                                <p className='promotionDurationGuide'>
                                    <strong>Продължителност</strong>
                                </p>
                        <hr></hr>
                    </div>
                    <div className='promotionsWrapper'>
                            {promotions.map
                                (promotion=>
                                    <div className='showPromotions'>
                                        <p className='promotionName'>
                                            {promotion.promotionName}
                                        </p>
                                        <p className='promotionDuration'>
                                            {promotion.promotionDuration}
                                        </p>
                                    </div>
                                )
                            }
                    </div>

                </div>

                    :
                    <p>Все още няма нови промоции</p>
                }
            <Footer/>
        </div>
    )
}

export default Sale
