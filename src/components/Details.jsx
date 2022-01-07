import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import CountrieDetail from './CountrieDetail'
import '../styles/header.scss'

const Details = ({countriesData, mode, setMode, isModeLetters, isModeBackgrounds, isModeBodyBackground }) => {
    let params = useParams()
    let { name } = params

    return (
        <>
            <Header mode={mode} setMode={setMode} isModeLetters={isModeLetters} isModeBackgrounds={isModeBackgrounds} />
            <CountrieDetail countriesData={countriesData} name={name} isModeLetters={isModeLetters} isModeBackgrounds={isModeBackgrounds} mode={mode} isModeBodyBackground={isModeBodyBackground} />
        </>
    )
}

export default Details
