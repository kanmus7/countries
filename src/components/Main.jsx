import React, { useState, useEffect } from 'react'
import '../styles/main.scss'
import Filters from './Filters'
import Countries from './Countries'
import Countrie from './Countrie'
import { getCountries } from '../httpRequest'

const Main = ({ isModeBodyBackground, isModeBackgrounds, isModeLetters, mode }) => {
    const [countriesData, setCountriesData] = useState([])
    const [searchCountrie, setSearchCountrie] = useState('')

    useEffect(() => {
        getCountries(setCountriesData)
    }, [])

    return (
        <section className={isModeBodyBackground}>
            <Filters
                isModeBackgrounds={isModeBackgrounds} isModeLetters={isModeLetters}
                mode={mode} setSearchCountrie={setSearchCountrie}
                searchCountrie={searchCountrie} />
            <Countries
                countriesData={countriesData}
                searchCountrie={searchCountrie}
                render={countrie => (
                    <Countrie
                        countrie={countrie}
                        isModeLetters={isModeLetters}
                        isModeBackgrounds={isModeBackgrounds}
                    />
                )}
            />
        </section>
    )
}

export default Main
