import React from 'react'
import Section from './Section'
import Header from './Header'

const Main = ({ countriesData, setCountriesData, mode, setMode, isModeLetters, isModeBackgrounds, isModeBodyBackground }) => {
    return (
        <>
            <Header mode={mode} setMode={setMode} isModeLetters={isModeLetters} isModeBackgrounds={isModeBackgrounds} />
            <Section countriesData={countriesData} setCountriesData={setCountriesData} isModeBodyBackground={isModeBodyBackground} isModeBackgrounds={isModeBackgrounds} isModeLetters={isModeLetters} mode={mode} />
        </>
    )
}

export default Main
