import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import image from '../assets/images/spork.png'

const Nav = ()=>{
    return (
        <div className = "Nav">
            <Link to= '/'>
                <ul>
                    <li>
                        <img src = {image}alt = {image}/>
                    </li>
                    <li>
                        SPORK
                    </li>
                </ul>
            </Link>
        </div>
    )
}

export default Nav