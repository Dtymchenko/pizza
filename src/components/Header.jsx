import React from 'react'
import './Header.scss';
import logoSvg from '../assets/img/pizza-logo.svg'
import closeImg from '../assets/img/close-icon.png'
import { Link } from 'react-router-dom';


export default function Header({ searchInput, setSearchInput }) {
    return (
    <header>
        <Link to='/'>
            <div className='header_logo_block'>
                <img src={logoSvg} alt="logo" width={35}></img>
                <h1>Pizza Shop On React</h1>
            </div>
        </Link>
        
        <div className='header_input_block'>
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='header_input' type='text' placeholder='search pizza'></input>
            {
                searchInput && <img width={25} src={closeImg} onClick={() => setSearchInput('')}></img>
            }
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
