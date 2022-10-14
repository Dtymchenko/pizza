import React from 'react'
import './Header.scss';
import logoSvg from '../assets/img/pizza-logo.svg'
import searchImg from '../assets/img/search-icon.png'
import { Link } from 'react-router-dom';


export default function Header() {
    return (
    <header>
        <Link to='/'>
            <div className='header_logo_block'>
                <img src={logoSvg} alt="logo" width={35}></img>
                <h1>Pizza Shop On React</h1>
            </div>
        </Link>
        
        <div className='header_input_block'>
            <input className='header_input' type='text' placeholder='search pizza'></input>
            <img width={25} src={searchImg}></img>
        </div>
        <Link to='/cart'>
        <div className='header_cart_block'>
            <p>1000$</p>
            <p className='header_cart_divider'></p>
            <p>5</p>
        </div>
        </Link>
        
    </header>
    )
}
