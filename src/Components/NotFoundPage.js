import React from 'react'
import {Button} from 'react-bootstrap'
import {FaBackward} from 'react-icons/fa'
import './css/NotFound.css'
export default function NotFoundPage() {
    return (
        <div>
            <p className='errorMessage'>ERROR 404</p>
            <h3>Тази страница не съществува</h3>
            <Button href='/Home' variant='warning'>  <strong>Обратно към началната страница</strong> <FaBackward/></Button>
        </div>
    )
}
