import React from 'react'
import Moon from '../img/moon-outline.svg'
import '../styles/header.scss'

const Header = ({mode, setMode, isModeLetters, isModeBackgrounds}) => {
    return (
        <header className={isModeBackgrounds}>
            <h1 className={isModeLetters}>Where in the world?</h1>
            <div className='mode-Container' onClick={()=> setMode(!mode)}>
                <img src={Moon} alt="moonImg" />
                <h2 className={isModeLetters}>Dark Mode</h2>
            </div>
        </header>
    )
}

export default Header
