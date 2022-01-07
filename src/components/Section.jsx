import React, { useState, useEffect } from 'react'
import '../styles/main.scss'
import Filters from './Filters'
import Countries from './Countries'
import Countrie from './Countrie'
import { getCountries } from '../httpRequest'

const Section = ({ countriesData, setCountriesData, isModeBodyBackground, isModeBackgrounds, isModeLetters, mode }) => {
    const [searchCountrie, setSearchCountrie] = useState('')
    const [searchForRegion, setsearchForRegion] = useState('')
    const style = {
        height: searchCountrie || (searchForRegion && (searchForRegion === 'Polar' || searchForRegion === 'Antarctic Ocean' || searchForRegion === 'Antarctic')) ? '100%' : 'auto'
    }

    useEffect(() => {
        getCountries(setCountriesData)
    }, [])


    return (
        <section style={style} className={isModeBodyBackground}>
            <Filters
                isModeBackgrounds={isModeBackgrounds} isModeLetters={isModeLetters}
                mode={mode} setSearchCountrie={setSearchCountrie}
                searchCountrie={searchCountrie} countriesData={countriesData}
                setsearchForRegion={setsearchForRegion} />
            <Countries
                countriesData={countriesData}
                searchCountrie={searchCountrie}
                searchForRegion={searchForRegion}
                render={(countrie, i) => (
                    <Countrie
                        key={i}
                        countrie={countrie}
                        isModeLetters={isModeLetters}
                        isModeBackgrounds={isModeBackgrounds}
                    />
                )}
            />
        </section>
    )
}

export default Section
