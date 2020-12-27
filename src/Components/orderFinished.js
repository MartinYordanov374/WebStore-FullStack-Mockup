import React from 'react'
import Navbar from './Header'
import {} from 'react-bootstrap'
import {FaTruck} from 'react-icons/fa'
export default function orderFinished() {
    return (
        <div>
            <Navbar/>
            <h1>Your order's on it's way !</h1>
            <FaTruck className='deliveryTruck' size={400}/>
        </div>
    )
}
