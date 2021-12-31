import React from 'react'
import '../styles/main.scss'
import Filters from './Filters'

const Main = ({isModeBodyBackground, isModeBackgrounds, isModeLetters, mode}) => {
   
    return (
        <section className={isModeBodyBackground}>
            <Filters isModeBackgrounds={isModeBackgrounds}  isModeLetters={isModeLetters} mode={mode}/>
        </section>
    )
}

export default Main
