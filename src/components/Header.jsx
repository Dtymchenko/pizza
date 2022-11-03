import React from 'react'
import './Header.scss';
import logoSvg from '../assets/img/pizza-logo.svg'
import closeImg from '../assets/img/close-icon.png'
import { Link } from 'react-router-dom';
import { SearchContext } from './../App';
import debounce from 'lodash.debounce';


export default function Header() {
    const { input, setInput, searchInput, setSearchInput } = React.useContext(SearchContext)

    const inputRef = React.useRef()
    const updateSearchInput = React.useCallback(
        debounce((str) => {
            setSearchInput(str)
        }, 250),
        []
    )

    const onChangeInput = (e) => {
        setInput(e.target.value)
        updateSearchInput(e.target.value)
    }

    const onClickClose = () => {
        setInput('')
        setSearchInput('')
        inputRef.current.focus()
    }

    return (
    <header>
        <Link to='/'>
            <div className='header_logo_block'>
                <img src={logoSvg} alt="logo" width={35}></img>
                <h1>Pizza Shop On React</h1>
            </div>
        </Link>
        
        <div className='header_input_block'>
            <input ref={inputRef} value={input} onChange={onChangeInput} className='header_input' type='text' placeholder='search pizza'></input>
            {
                input && <img width={25} src={closeImg} alt="close" onClick={onClickClose}></img>
            }
        </div>
        <Link to='/cart'>
            <div className='header_cart_block_wrapper'>
                <div className='header_cart_block'>
                    <p>1000$</p>
                    <p className='header_cart_divider'></p>
                    <p>5</p>
                </div>
            </div>
        
        </Link>
        
    </header>
    )
}
