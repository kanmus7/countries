import React, { useState, useEffect } from 'react'
import '../styles/countrieDetail.scss'
import arrow from '../img/arrow.svg'
import { Link } from 'react-router-dom'
import { getCountriesByName } from '../httpRequest'


const CountrieDetail = ({ countriesData, name, isModeLetters, isModeBackgrounds, mode, isModeBodyBackground }) => {
    const [countrieDetail, setCountrieDetail] = useState([])
    useEffect(() => {
        getCountriesByName(setCountrieDetail, name)
    }, [])
    const countrie = countrieDetail[0]

    const bordersName = (border) => {
        let bordersName = []
        if (countriesData) {
            const countriesBorder = countriesData.filter(countrie => countrie.alpha3Code === border)
            bordersName = countriesBorder.map(bor => bor.name)
        }
        return bordersName[0]
    }

    const changeCountrieDetail = (borderName) => {
        getCountriesByName(setCountrieDetail, borderName)
    }


    return (
        <section className={`sectionDetail-container ${isModeBodyBackground}`}>
            <Link to='/'>
                <div className={`back-container ${isModeLetters} ${isModeBackgrounds}`}>
                    <img className={mode ? 'searchImgLight' : 'searchImgDark'} src={arrow} alt="arrowBack-img" />
                    Back
                </div>
            </Link>
            <div className='details-container'>
                <div className='imgFlag-container'>
                    <img src={countrie && countrie.flags.svg} alt='countrieImg' />
                </div>
                <div className={`countrieInfoDetail-container  ${isModeLetters}`}>
                    <h1>{countrie && countrie.name}</h1>
                    <div className='info-container'>
                        <div className='info1-container'>
                            <ul className='info1-ul'>
                                <li><span>Native Name: </span>{countrie && countrie.nativeName}</li>
                                <li><span>Population: </span>{countrie && Intl.NumberFormat().format(countrie.population)}</li>
                                <li><span>Region: </span>{countrie && countrie.region}</li>
                                <li><span>Sub Region: </span>{countrie && countrie.subregion}</li>
                                <li><span>Capital: </span>{countrie && countrie.capital}</li>
                            </ul>
                        </div>
                        <div className='info2-container'>
                            <ul>
                                <li><span>Top Level Domain: </span>{countrie && countrie.topLevelDomain}</li>
                                <li><span>Currencies: </span>{countrie && countrie.currencies[0].name}</li>
                                <li><span>Languages: </span>{countrie && countrie.languages.map(language => {
                                    if (countrie.languages[0].name === language.name) {
                                        return `${language.name}`
                                    } else {
                                        return `, ${language.name}`
                                    }
                                })}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`borders ${isModeLetters}`}>
                        <h2>Border Countries :</h2>
                        <div className='borders-links'>
                            {countrie && countrie.borders ? countrie.borders.map(border => {
                                const borderName = bordersName(border)
                                return <Link onClick={() => changeCountrieDetail(borderName)} className={`borderCountries ${isModeLetters} ${isModeBackgrounds}`} to={`/CountrieDetail/${borderName}`}>{borderName}</Link>
                            }) : 'No borders'}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CountrieDetail
